import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import blue from "@material-ui/core/colors/blue"
import green from "@material-ui/core/colors/green"
import { Helmet } from "react-helmet"

import CssBaseline from "@material-ui/core/CssBaseline"
import GlobalStyles from "./GlobalStyles"

import { ThemeProvider } from "@material-ui/core/styles"

import customTheme from "./theme"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

require("prism-themes/themes/prism-material-dark.css")

export default ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        appBar: {
          transparent: true,
        },
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
            marginTop: 24,
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
          appBar: green,
        },
      }),
    [prefersDarkMode]
  )

  const { title, description, url } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={customTheme}>
        <Helmet title={title}>
          <link rel="canonical" href={url} />
          <title>{title}</title>
          <meta name="description" content={description} />
          {url && <meta property="og:url" content={url} />}
          {title && <meta property="og:title" content={title} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          {title && <meta name="twitter:title" content={title} />}
          {description && (
            <meta name="twitter:description" content={description} />
          )}
        </Helmet>
        <React.Fragment>
          <CssBaseline />
          <GlobalStyles>{children}</GlobalStyles>
        </React.Fragment>
      </ThemeProvider>
    </ThemeProvider>
  )
}
