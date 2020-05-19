import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Typography from "@material-ui/core/Typography"
import Link from "./Link"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

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
  const { title, logo } = useSiteMetadata()

  return (
    <Typography className={classes.root}>
      <Link to="/">{logo ? <img src={logo} alt={title} /> : title}</Link>
    </Typography>
  )
}
