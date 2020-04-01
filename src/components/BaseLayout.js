import React from "react"
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

import CssBaseline from "@material-ui/core/CssBaseline"
import GlobalStyles from "./GlobalStyles"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import blue from "@material-ui/core/colors/blue"

export default ({ children }) => {
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

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiTable: {
            root: {
              marginTop: 14,
              marginBottom: 14,
            },
          },
        },
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          h1: {
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: 0.25,
            marginBottom: 28,
          },
          h2: {
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 24,
          },
          h3: {
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 20,
          },
          h4: {
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 16,
          },
          h5: {
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 14,
            textTransform: "uppercase",
          },
          h6: {
            fontSize: 14,
            fontWeight: 700,
            marginBottom: 12,
            textTransform: "uppercase",
          },

          body1: {
            fontSize: 16,
          },
          body2: {
            fontSize: 14,
          },
          overline: {
            fontSize: 16,
            fontWeight: 500,
          },
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: blue,
        },
      }),
    [prefersDarkMode]
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
