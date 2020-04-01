import React from "react"

import { useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import grey from "@material-ui/core/colors/grey"

import ChipGroup from "./ChipGroup"
import Link from "./Link"

const useStyles = makeStyles(theme => ({
  cardActionArea: {
    minHeight: 170,
  },
  typographyContent: {
    textTransform: "uppercase",
    color: grey[600],
  },
  title: {
    fontWeight: "600",
  },
}))

/**
 * ContentCard displays a summary of a module or a course. Used when browsing
 * content.
 */
export default props => {
  const intl = useIntl()
  const classes = useStyles()

  const meta = buildMeta({
    audience: props.content.audience,
    difficulty: props.content.difficulty,
    duration: intl.formatMessage(
      { id: "time.minute" },
      { count: props.content.duration }
    ),
  })

  let slugPrefix
  switch (props.content.type) {
    case "course":
      slugPrefix = "/courses"
      break
    case "module":
      slugPrefix = "/modules"
      break
    default:
      slugPrefix = ""
  }

  return (
    <Card>
      <CardActionArea
        className={classes.cardActionArea}
        component={Link}
        to={slugPrefix + props.content.fields.slug}
      >
        <CardContent>
          <Typography variant="body1" className={classes.title}>
            {props.content.title}
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.typographyContent}
            paragraph
          >
            {intl.formatMessage({ id: `text.${props.content.type}` })}
          </Typography>
          <Typography variant="body2" paragraph>
            {meta}
          </Typography>
          <ChipGroup labels={props.content.topics} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

/**
 * buildMeta returns a formatted text with meta information.
 *
 * Example: "Administrator · Beginner · 2 min"
 */
const buildMeta = ({ audience, difficulty, duration }) => {
  return [audience, difficulty, duration]
    .flatMap(f => f)
    .filter(f => f)
    .filter(f => f !== " min")
    .join(" · ")
}
