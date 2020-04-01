import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"
import Link from "./Link"

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    "& a": {
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
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
    <Typography variant="h3" className={classes.root}>
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </Typography>
  )
}
