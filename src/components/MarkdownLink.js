import React from "react"

import MuiLink from "@material-ui/core/Link"
import { Link as GatsbyLink } from "gatsby-plugin-intl"

const InnerLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <MuiLink component={GatsbyLink} to={to}>
        {children}
      </MuiLink>
    )
  }
  return (
    <MuiLink href={to} {...other}>
      {children}
    </MuiLink>
  )
}

/**
 * Link is a wrapper around ReachLink -> GatsbyLink -> IntlLink that forwards
 * the ref to the inner element.
 *
 * https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
 */
const Link = React.forwardRef((props, ref) => (
  <InnerLink {...props} innerRef={ref}>
    {props.children}
  </InnerLink>
))

export default Link
