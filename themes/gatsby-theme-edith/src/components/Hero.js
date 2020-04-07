import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
    },
  },
  description: {
    fontSize: "20px",
    fontWeight: 300,
  },
}))

/**
 * Hero is used to display important information front and center.
 */
export default props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h1">{props.title}</Typography>
      <Typography className={classes.description} paragraph>
        {props.description}
      </Typography>
    </div>
  )
}
