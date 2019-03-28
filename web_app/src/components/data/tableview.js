import React, { Component } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";
// import _ from "lodash";
const API_URL = "https://reqres.in/api/users?1";
// const API_URL =
//   "http://www.json-generator.com/api/json/get/bTGUFfhDNe?indent=2";
class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch(API_URL)
      .then(response => {
        response.json();
      })
      .then(data => {
        this.setState({ data: data });
      })

      .catch(error => {
        console.log(`${error} opps,something went wrong :(`);
      });
  }

  render() {
    let dataDummy = this.state.data;
    const dataArray = [this.state.data];
    console.log(dataArray);
    const data = [
      {
        name: "Tanner Linsley",
        age: 26
      },
      {
        name: "1Tanner Linsley",
        age: 27
      },
      {
        name: "2Tanner Linsley",
        age: 28
      },
      {
        name: "3Tanner Linsley",
        age: 29
      },
      {
        name: "4Tanner Linsley",
        age: 30
      }
    ];

    // console.log(data2);
    // const headers = Object.keys(this.state.data).map(key => key);
    // console.log(headers);

    // const rows = Object.values(dataArray).map(key => key);
    // console.log(rows);

    // console.log(Object.keys(dataArray));

    // let doIt = [];
    // headers.forEach((key, index) => {
    //   {
    //     headers[key] = rows[index];
    //   }
    // });
    // console.log(doIt);
    const columns = Object.keys(data[0]).map(key => ({
      Header: key,
      accessor: key
    }));
    // console.log(columns);
    // console.log(columns);
    // console.log(doIt);
    // console.log(data);
    return (
      <div>
        <h3>Simple JSON table without nested data</h3>
        {Object.keys(data[0]).map(header => (
          <p>{header}</p>
        ))}
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}
export default TableView;
