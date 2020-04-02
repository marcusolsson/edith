import React from "react"

import { Link as IntlLink } from "gatsby-plugin-intl"

/**
 * Link is a wrapper around ReachLink -> GatsbyLink -> IntlLink that forwards
 * the ref to the inner element.
 *
 * https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
 */
const Link = React.forwardRef((props, ref) => (
  <IntlLink {...props} innerRef={ref}>
    {props.children}
  </IntlLink>
))

export default Link
