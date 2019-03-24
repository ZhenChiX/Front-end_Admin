import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/layouts/login";
import Dashboard from "./components/dashboard/dashboard.js";
import Button from "@material-ui/core/Button";

import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PacmanLoader } from "react-spinners";
import Modal from "@material-ui/core/Modal";

const styles = {
  button: {
    position: "fixed",
    top: "2em",
    right: "2em"
  },
  // background: {
  //   position: "fixed",
  //   filter: "blur(5px)",
  //   background: "rgba(2,2,2,1)",
  //   zIndex: 5000,
  //   width: "100vw",
  //   height: "100vh"
  // },
  progress: {
    display: "block",
    top: "40%",
    left: `calc(50% - 20px)`,
    position: "absolute",
    zIndex: 9999,
    outline: "none"
  }
};

export const GlobalContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      logOut: () => {
        console.log("User logged out");
        this.setState({
          auth: false,
          query: "idle"
        });
      },
      query: "idle"
    };
  }
  componentDidMount() {
    clearTimeout(this.timer);
  }
  guestLogin = () => {
    this.setState({
      query: "progress"
    });
    this.timer = setTimeout(() => {
      this.setState({
        auth: true
      });
    }, 3000);

    console.log(this.state);
  };
  render() {
    return (
      <GlobalContext.Provider value={{ state: this.state }}>
        <div className="App">
          {this.state.auth === true ? (
            <Dashboard />
          ) : (
            <div>
              <Login />
              {/* ==========TESTING GUEST LOGIN ========== REMOVE IT SOON*/}
              <Button
                variant="contained"
                color="secondary"
                onClick={this.guestLogin}
                style={styles.button}
              >
                GUEST LOGIN
              </Button>
              {/* ==========TESTING GUEST LOGIN ========== REMOVE IT SOON */}
              {this.state.query === "progress" ? (
                <Modal open="true">
                  <div style={styles.progress}>
                    <PacmanLoader color="rgba(245,205,5,1)" />
                  </div>
                </Modal>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
