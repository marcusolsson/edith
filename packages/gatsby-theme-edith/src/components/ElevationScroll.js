import React from "react"

import useScrollTrigger from "@material-ui/core/useScrollTrigger"

/**
 * ElevationScroll elevates the app bar when scrolling.
 *
 * https://material-ui.com/components/app-bar/#elevate-app-bar
 */
export default props => {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}
