import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import "katex/dist/katex.min.css"

const monotypeFontStack = [
  "SFMono-Regular",
  "Consolas",
  "Liberation Mono",
  "Menlo",
  "Roboto Mono",
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
        fontStyle: "italic",
        margin: 0,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.action.hover,
        borderRadius: theme.shape.borderRadius,
        borderLeftWidth: 5,
        borderLeftStyle: "solid",
        borderLeftColor: theme.palette.action.selected,
        "& > :last-child": {
          marginBottom: 0,
        },
      },
      code: {
        fontFamily: monotypeFontStack,
        borderRadius: "inherit",
        padding: 20,
      },
      pre: {
        fontFamily: monotypeFontStack,
        borderRadius: "inherit",
      },
      'code[class*="language-"]': {
        fontFamily: monotypeFontStack,
        overflow: "auto",
      },
      'pre[class*="language-"]': {
        fontFamily: monotypeFontStack,
        margin: 0,
        padding: 0,
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
      // TODO: Is there a better way to remove margin on the paragraphs in list item?
      "li > p": {
        margin: 0,
      },
    },
  },
}))

export default ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}
