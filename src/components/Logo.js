import React from "react"

import { useTheme } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const theme = useTheme()
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <img
      src={theme.palette.type === "dark" ? "/logo-light.svg" : "/logo-dark.svg"}
      alt={data.site.siteMetadata.title}
      style={{
        height: "20px",
      }}
    />
  )
}
