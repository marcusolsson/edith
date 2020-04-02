import React from "react"

import MuiLink from "@material-ui/core/Link"
import { Link as GatsbyLink } from "gatsby-plugin-intl"

/**
 * Link is a wrapper around ReachLink -> GatsbyLink -> IntlLink that forwards
 * the ref to the inner element.
 *
 * https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
 */
const Link = React.forwardRef((props, ref) => (
  <MuiLink component={GatsbyLink} ref={ref} {...props} />
))

export default Link
