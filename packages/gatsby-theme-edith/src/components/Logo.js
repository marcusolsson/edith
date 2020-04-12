import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"
import Link from "./Link"

const useStyles = makeStyles(theme => ({
  root: {
    "& a": {
      color: theme.appBar?.transparent
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
      textDecoration: "none",
    },
    fontSize: 24,
    fontWeight: 600,
  },
}))

export default props => {
  const classes = useStyles()
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Typography className={classes.root}>
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </Typography>
  )
}
