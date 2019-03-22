import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/layouts/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
