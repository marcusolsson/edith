import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"

import StyledAppBar from "./StyledAppBar"

import Logo from "./Logo"
import ElevationScroll from "./ElevationScroll"
import BaseLayout from "./BaseLayout"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    marginTop: theme.spacing(5),
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}))

/**
 * DefaultLayout defines the layout for most pages.
 */
export default props => {
  const classes = useStyles()

  const maxWidth = "md"

  return (
    <BaseLayout>
      <div className={classes.root}>
        <ElevationScroll {...props}>
          <StyledAppBar>
            <Toolbar>
              <Logo />
            </Toolbar>
          </StyledAppBar>
        </ElevationScroll>

        <Container maxWidth={maxWidth} className={classes.content}>
          {props.children}
        </Container>
      </div>
    </BaseLayout>
  )
}
