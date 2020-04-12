import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "25px",
    height: 0,
  },
  iframe: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
}))

/**
 * Video responsively embeds a video.
 */
export default props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <iframe
        className={classes.iframe}
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}
