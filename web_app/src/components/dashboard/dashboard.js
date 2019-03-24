import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuAppBar from "./appbar";
import MiniDrawer from "./sidebar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MiniDrawer />;
  }
}

export default Dashboard;
