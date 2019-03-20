import React, { Component, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { TextField, CardHeader, CardMedia } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TrackChange from "@material-ui/icons/TrackChanges";

const styles = theme => ({
  container: {
    display: "grid",
    // flexWrap: "wrap"
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
    position: "relative",
    margin: "auto",
    overflow: "visible"
  },
  grid: {
    position: "relative"
  },
  media: {
    backgroundImage:
      "url(https://img.talkandroid.com/uploads/2014/03/sprint-logo-630x330.jpg)",
    // ⚠️ object-fit is not supported by IE 11.

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "120px"
  },
  spin: {
    left: "-0.3em",
    top: "-0.3em",
    color: "rgba(245,205,5,0.9)",
    position: "absolute",
    fontSize: "80px"
  }
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiline: "Controlled",
      password: "",
      showPassword: false
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleMouseOver = e => {};

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        {/* <Card className={classes.outerCard}> */}
        <Card className={classes.menu}>
          <Grid item className={classes.grid}>
            <TrackChange
              id="App-logo"
              className={classes.spin}
              color="primary"
            />

            <CardMedia className={classes.media} alt="Sprint Logo" />
          </Grid>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              required
              id="login_username"
              label="UserName/Email"
              className={classes.textField}
              onChange={this.handleChange("name")}
              margin="normal"
              // variant="filled"
              InputProps={{
                endAdornment: <InputAdornment position="end" />
              }}
            />

            <TextField
              required
              id="login_password"
              className={classes.textField}
              type={this.state.showPassword ? "text" : "password"}
              label="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}
              // variant="filled"
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
              color="primary"
              id="App-login"
              onMouseOver={this.handleMouseOver}
            >
              Login
            </Button>
          </form>
        </Card>
        {/* </Card> */}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
