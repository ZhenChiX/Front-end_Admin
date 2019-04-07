import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Chart from "../data/graph";
import News from "../data/news";
import TableView from "../data/tableview";
import TableView2 from "../data/tableview2";

import InsertChart from "@material-ui/icons/InsertChart";
import BubbleChart from "@material-ui/icons/BubbleChart";
import ShowChart from "@material-ui/icons/ShowChart";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { GlobalContext } from "../layouts/login";
import fire from "../data/fire";

const drawerWidth = 240;

// Global State Management

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: "1"
  },

  grow: {
    flexGrow: "1"
  },
  appBar: {
    backgroundColor: "rgba(102,102,102,0.9)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "rgba(241,241,241,1)"
  },
  drawerOpen: {
    backgroundColor: "rgba(241,241,241,1)",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    backgroundColor: "rgba(241,241,241,1)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
    // padding: theme.spacing.unit * 3
  }
});

class SideBar extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleLogout = () => {
    fire.auth().signOut();
    // console.log(GlobalContext);
  };
  render() {
    const { classes, theme } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(GlobalContext);

    return (
      <Router>
        <GlobalContext.Consumer>
          {value => (
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: this.state.open
                })}
              >
                <Toolbar disableGutters={!this.state.open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                      [classes.hide]: this.state.open
                    })}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    className={classes.grow}
                    variant="h5"
                    color="inherit"
                    noWrap
                  >
                    SAuto
                    {/* <p>{value.email}</p> */}
                  </Typography>
                  <div>
                    <IconButton
                      aria-owns={open ? "menu-appbar" : undefined}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <Link to="/">
                        <MenuItem onClick={this.handleLogout}>Log Out</MenuItem>
                      </Link>
                    </Menu>
                  </div>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open
                  })
                }}
                open={this.state.open}
              >
                <div className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronLeftIcon />
                    )}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <Link to="/news">
                    <ListItem button>
                      <ListItemIcon>
                        <BubbleChart />
                      </ListItemIcon>
                      <ListItemText>News</ListItemText>
                    </ListItem>
                  </Link>
                  {/* <Link to="/graph3d">
                    <ListItem button>
                      <ListItemIcon>
                        <InsertChart />
                      </ListItemIcon>
                      <ListItemText>3D Graph</ListItemText>
                    </ListItem>
                  </Link> */}
                </List>
                <Divider />
                <List>
                  <Link to="/tableview2">
                    <ListItem button>
                      <ListItemIcon>
                        <ShowChart />
                      </ListItemIcon>
                      <ListItemText>Table View B</ListItemText>
                    </ListItem>
                  </Link>
                </List>
              </Drawer>
              <main className={classes.content}>
                <div className={classes.toolbar} />

                <Route exact path="/" component={News} />
                <Route path="/news" component={News} />
                {/* <Route path="/graph3d" component={Chart} /> */}
                <Route path="/tableview2" component={TableView2} />
              </main>
            </div>
          )}
        </GlobalContext.Consumer>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideBar);
