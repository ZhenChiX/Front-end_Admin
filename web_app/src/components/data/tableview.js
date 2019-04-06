import React, { Component } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

const API_URL =
  "http://www.json-generator.com/api/json/get/bOykqbJlpe?indent=2";
// const API_URL =
//   "http://www.json-generator.com/api/json/get/bTGUFfhDNe?indent=1";

class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      columns: [],
      result: []
    };
  }
  render() {
    return <h3>nothing here</h3>;
  }
}
export default TableView;
