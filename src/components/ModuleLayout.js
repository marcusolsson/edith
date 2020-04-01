import React from "react"

import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MenuIcon from "@material-ui/icons/Menu"

import StyledAppBar from "./StyledAppBar"
import BaseLayout from "./BaseLayout"
import ElevationScroll from "./ElevationScroll"
import Link from "./Link"

import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 250

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    flexGrow: 1,

    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(3),
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {},
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  backButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}))

/**
 * ModuleLayout defines the layout for when navigating a module.
 */
export default props => {
  const classes = useStyles()

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Divider />
      {props.drawerList}
    </div>
  )

  const maxWidth = "md"

  return (
    <BaseLayout>
      <div className={classes.root}>
        <ElevationScroll {...props}>
          <StyledAppBar drawer={true}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                color="inherit"
                className={classes.backButton}
                component={Link}
                to={props.backTo}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="body1" style={{ fontSize: 20 }} noWrap>
                {props.title}
              </Typography>
            </Toolbar>
          </StyledAppBar>
        </ElevationScroll>

        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <Container maxWidth={maxWidth} disableGutters>
            {props.children}
          </Container>
        </main>
      </div>
    </BaseLayout>
  )
}
