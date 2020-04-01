import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.2),
    },
  },
}))

/**
 * ChipGroup displays a horizontal group of Chips.
 */
export default props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {props.labels?.map((label, index) => (
        <Chip key={index} size="small" label={label} />
      ))}
    </div>
  )
}
