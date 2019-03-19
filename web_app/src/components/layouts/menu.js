import React, { Component, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  background: {
    background: "url(https://i.imgur.com/XonH5Y5.jpg)"
  },
  container: {
    display: "grid",
    // flexWrap: "wrap"
    gridTemplateRows: "1 1 1"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});
class Menu extends Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.background}>
          <Card>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="standard-name"
                label="UserName"
                className={classes.textField}
                // value={this.state.name}
                onChange={this.handleChange("name")}
                margin="normal"
                required
              />

              <TextField
                id="standard-uncontrolled"
                label="Password"
                className={classes.textField}
                margin="normal"
                required
              />

              <TextField
                required
                id="standard-required"
                label="Required"
                className={classes.textField}
                margin="normal"
              />
              <Button color="primary" id="signIn">
                Sign In
              </Button>
            </form>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Menu);
