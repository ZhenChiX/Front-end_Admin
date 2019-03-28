import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuAppBar from "./appbar";
import SideBar from "./sidebar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return <SideBar />;
  }
}

export default Dashboard;
