import React from "react"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import parseModule from "../parse/parseModule"

import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepButton from "@material-ui/core/StepButton"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import ModuleLayout from "../components/ModuleLayout"
import { Link, navigate } from "../components/Link"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    position: "sticky",
    zIndex: 5,
    top: theme.spacing(1),
    bottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  buttonDone: {
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
  paper: {
    padding: theme.spacing(3),
  },
}))

/**
 * Template for a module page.
 */
export default props => {
  const site = useSiteMetadata()
  const classes = useStyles()
  const intl = useIntl()

  const node = props.data.newModule

  const module = parseModule(node.htmlAst)
  module.audience = node.frontmatter.audience
  module.difficulty = node.frontmatter.difficulty
  module.topics = node.frontmatter.topics
  module.type = "module"
  module.fields = { slug: node.fields.slug }

  const unitIndex = props.pageContext.index
  const unit = module.units[unitIndex]

  const prevUnit = () => {
    if (unitIndex > 0) {
      navigate(`/modules${module.fields.slug}${unitIndex}`)
    }
  }
  const nextUnit = () => {
    if (unitIndex < module.units.length - 1) {
      navigate(`/modules${module.fields.slug}${unitIndex + 2}`)
    }
  }

  // Navigate using arrow keys
  const arrowLeft = useKeyPress("ArrowLeft")
  const arrowRight = useKeyPress("ArrowRight")

  if (arrowLeft) {
    prevUnit()
  } else if (arrowRight) {
    nextUnit()
  }

  return (
    <ModuleLayout
      title={module.title}
      backTo="/"
      drawerList={
        <Stepper
          connector={null}
          nonLinear
          activeStep={unitIndex}
          orientation="vertical"
          style={{ padding: "1em" }}
        >
          <Helmet>
            <title>
              {module.title} | {site.title}
            </title>
            <link
              rel="canonical"
              href={`${site.url}/modules${module.fields.slug}`}
            />
          </Helmet>

          {module.units.map((unit, index) => (
            <Step key={index}>
              <StepButton
                component={Link}
                to={`/modules${module.fields.slug}${index + 1}`}
                completed={index < unitIndex}
                style={{
                  marginBottom: "1em",
                }}
              >
                {unit.title}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      }
    >
      {unit ? (
        <Paper className={classes.paper}>
          <Typography variant="h1">{unit.title}</Typography>
          {unit.components}
        </Paper>
      ) : null}

      <div className={classes.buttons}>
        {unitIndex > 0 ? (
          <Button variant="contained" onClick={prevUnit}>
            {intl.formatMessage({ id: "unit.back" })}
          </Button>
        ) : null}
        <div />
        {unitIndex < module.units.length - 1 ? (
          <Button variant="contained" color="primary" onClick={nextUnit}>
            {intl.formatMessage({ id: "unit.next" })}
          </Button>
        ) : (
          <Button
            variant="contained"
            component={Link}
            to="/"
            className={classes.buttonDone}
          >
            {intl.formatMessage({ id: "unit.done" })}
          </Button>
        )}
      </div>
    </ModuleLayout>
  )
}

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed

  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  // Add event listeners

  useEffect(() => {
    window.addEventListener("keydown", downHandler)

    window.addEventListener("keyup", upHandler)

    // Remove event listeners on cleanup

    return () => {
      window.removeEventListener("keydown", downHandler)

      window.removeEventListener("keyup", upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}

export const query = graphql`
  query($slug: String!) {
    newModule: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        audience
        difficulty
        topics
      }
      fields {
        slug
      }
      htmlAst
    }
  }
`
