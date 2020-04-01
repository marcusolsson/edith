import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const monotypeFontStack = [
  "SFMono-Regular",
  "Consolas",
  "Liberation Mono",
  "Menlo",
  "Courier",
  "monospace",
]

const useStyles = makeStyles(theme => ({
  root: {
    "@global": {
      img: {
        maxWidth: "100%",
        display: "block",
        margin: "0 auto",
      },
      blockquote: {
        margin: 0,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.action.hover,
        borderRadius: theme.shape.borderRadius,
        borderLeftWidth: 5,
        borderLeftStyle: "solid",
        borderLeftColor: theme.palette.action.selected,
      },
      code: {
        fontFamily: monotypeFontStack,
        borderRadius: "inherit",
      },
      pre: {
        fontFamily: monotypeFontStack,
        borderRadius: "inherit",
        margin: 0,
      },
      ".gatsby-highlight": {
        borderRadius: theme.shape.borderRadius,
        margin: 0,
        boxShadow: theme.shadows[1],
        "& code": {
          display: "block",
        },
        marginBottom: theme.spacing(1),
      },
      ".gatsby-code-title": {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.light,
        fontFamily: monotypeFontStack,
        borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
        padding: theme.spacing(2),
        "& + .gatsby-highlight": {
          borderRadius: `0px 0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
        },
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
}))

export default ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}
