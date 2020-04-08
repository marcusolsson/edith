import React from "react"
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

import CssBaseline from "@material-ui/core/CssBaseline"
import GlobalStyles from "./GlobalStyles"

import { ThemeProvider } from "@material-ui/core/styles"

import createTheme from "./theme"

export default ({ children }) => {
  const theme = createTheme()

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
    <ThemeProvider theme={theme}>
      <Helmet title={data.site.siteMetadata.title} />
      <React.Fragment>
        <CssBaseline />
        <GlobalStyles>{children}</GlobalStyles>
      </React.Fragment>
    </ThemeProvider>
  )
}
