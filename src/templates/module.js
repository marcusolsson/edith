import React from "react"
import parseModule from "../parse/parseModule"

import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepButton from "@material-ui/core/StepButton"

import ModuleLayout from "../components/ModuleLayout"
import Link from "../components/Link"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import "katex/dist/katex.min.css"

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
      <Paper className={classes.paper} key={unit.id}>
        <Typography variant="h1">{unit.title}</Typography>
        {unit.components}
      </Paper>

      <div className={classes.buttons}>
        {unitIndex > 0 ? (
          <Button
            variant="contained"
            component={Link}
            to={`/modules${module.fields.slug}${unitIndex}`}
          >
            {intl.formatMessage({ id: "unit.back" })}
          </Button>
        ) : null}
        <div />
        {unitIndex < module.units.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/modules${module.fields.slug}${unitIndex + 2}`}
          >
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
