import React from "react"
import { useRef, useState } from "react"
import { useIntl } from "gatsby-plugin-intl"

import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const copy = require("clipboard-copy")

const useStyles = makeStyles(theme => ({
  button: {
    position: "absolute",
    top: 4,
    right: 1,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))

/**
 * CodeBlock wraps the pre tag and adds button that copies the contents.
 */
export default ({ children, ...others }) => {
  const classes = useStyles()
  const intl = useIntl()

  const [copied, setCopied] = useState(false)
  const preRef = useRef(null)

  const textCopy = intl.formatMessage({ id: "text.copy" })
  const textCopied = intl.formatMessage({ id: "text.copied" })

  const copyToClipboard = e => {
    // Button text gets copied along with the code, so we need remove it, and the newline.
    copy(preRef.current.innerText.slice(textCopy.length + 1))
    setCopied(true)
  }

  return (
    <pre {...others} ref={preRef}>
      <Button
        size="small"
        onClick={copyToClipboard}
        className={classes.button}
        disabled={copied}
      >
        {copied ? textCopied : textCopy}
      </Button>
      {children}
    </pre>
  )
}
