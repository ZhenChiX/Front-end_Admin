import React, { Component, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { TextField, CardHeader, CardMedia } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReactDOM from "react-dom";
//login input
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// icon
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TrackChange from "@material-ui/icons/TrackChanges";
import Settings from "@material-ui/icons/Settings";

// tab view
// import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr"
  },
  textField: {
    margin: "0.5em auto",
    width: 250
  },
  outerCard: {
    width: "90vw",
    height: "90vh",
    position: "relative",
    background: "transparent"
  },
  menu: {
    width: 300,
    position: "absolute",
    margin: "auto",
    overflow: "visible",
    top: "20vh"
  },
  tabs: {
    width: 280,
    margin: "auto",
    position: "relative"
  },

  grid: {
    position: "relative"
  },
  media: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "120px",
    width: "280px",
    margin: "auto",
    top: "-0.3em",
    position: "relative",
    zIndex: "101",
    boxShadow: "3px 3px 10px 2px rgba(128, 128, 128, 0.7)"
  },
  spin: {
    left: "-25px",
    top: "-40px",
    color: "rgba(245,205,5,1)",
    position: "absolute",
    fontSize: "80px",
    animation: "App-logo-spin infinite 10s linear",
    zIndex: "99"
  }
};

//tab container
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiline: "Controlled",
      password: "",
      confirmPassword: "",
      showPassword: false,

      value: 0
    };
  }

  componentDidMount() {}
  componentWillUpdate() {}
  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleTabChangeIndex = index => {
    this.setState({ value: index });
  };

  //   handleMouseOver = e => {
  //     //   logo spin animation on hover
  //     const node = ReactDOM.findDOMNode(this);
  //     if (node instanceof HTMLElement) {
  //       const target = node.querySelector("#App-logo");
  //       target.style.animation = "App-logo-spin-hover infinite 2s linear";
  //     }
  //   };
  //   handleMouseLeave = e => {
  //     //   logo spin animation on leave
  //     const node = ReactDOM.findDOMNode(this);
  //     if (node instanceof HTMLElement) {
  //       const target = node.querySelector("#App-logo");
  //       target.style.animation = "App-logo-spin infinite 10s linear";
  //     }
  //   };

  handleSubmit = e => {
    e.preventDefault();
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleRotate = e => {};
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Card id="App-card" className={classes.menu}>
          <Grid item className={classes.grid}>
            {/* <TrackChange
              id="App-logo"
              className={classes.spin}
              color="primary"
              spin={this.state.spin}
            /> */}
            <Settings
              id="App-logo"
              className={classes.spin}
              color="primary"
              spin={this.state.spin}
            />

            <CardMedia
              id="App-banner"
              className={classes.media}
              image="https://img.talkandroid.com/uploads/2014/03/sprint-logo-630x330.jpg"
              //   image="https://preview.redd.it/izy5wrj4st221.png?width=960&crop=smart&auto=webp&s=2da2da0e512c6dfd15ade892440dc6b12c54afa3"
              // image="https://via.placeholder.com/630x330?text=SAuto+Placeholder+Banner"
              alt="Sprint Logo"
            />
          </Grid>

          <AppBar className={classes.tabs} position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Login" />
              <Tab label="SignUp" />
            </Tabs>
          </AppBar>
          {this.state.value === 0 && (
            <TabContainer>
              <form
                className={classes.container}
                onSubmit={this.handleSubmit}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="login_username"
                  label="UserName/Email"
                  className={classes.textField}
                  onChange={this.handleChange("name")}
                  margin="normal"
                />

                <TextField
                  required
                  id="login_password"
                  className={classes.textField}
                  type={this.state.showPassword ? "text" : "password"}
                  label="Password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant="contained"
                  //   color="primary"
                  id="App-login"
                  onMouseOver={this.handleMouseOver}
                  onMouseLeave={this.handleMouseLeave}
                >
                  Login
                </Button>
              </form>
            </TabContainer>
          )}

          {this.state.value === 1 && (
            <TabContainer>
              <form
                className={classes.container}
                onSubmit={this.handleSubmit}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="signup_username"
                  label="UserName/Email"
                  className={classes.textField}
                  onChange={this.handleChange("name")}
                  margin="normal"
                />

                <TextField
                  required
                  id="signup_password"
                  className={classes.textField}
                  type={this.state.showPassword ? "text" : "password"}
                  label="Password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  required
                  id="confirm_password"
                  className={classes.textField}
                  type={this.state.showPassword ? "text" : "password"}
                  label="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange("confirmPassword")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant="contained"
                  id="App-register"
                  onMouseOver={this.handleMouseOver}
                  onMouseLeave={this.handleMouseLeave}
                >
                  Register
                </Button>
              </form>
            </TabContainer>
          )}
        </Card>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
