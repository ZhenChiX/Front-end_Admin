import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/layouts/login";
import Dashboard from "./components/dashboard/dashboard.js";
import Button from "@material-ui/core/Button";
import fire from "./components/data/fire";

////////// context API //////////
export const GlobalContext = React.createContext();
////////// context API //////////

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      query: "idle",
      user: null,
      logOut: () => {
        console.log("User logged out");
        this.setState({
          auth: false,
          query: "idle"
        });
      }
    };
  }
  componentDidMount() {
    clearTimeout(this.timer);

    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };

  render() {
    return (
      <GlobalContext.Provider value={{ state: this.state }}>
        <div className="App">
          <div>{this.state.user ? <Dashboard /> : <Login />}</div>
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
