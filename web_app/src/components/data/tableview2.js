import React, { Component } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

//select material ui
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const WebDataRocks = window.WebDataRocksReact;
const styles = {
  div: {
    width: "80vw",
    margin: "auto"
  },

  formControl: {
    display: "grid",
    width: "160px",
    margin: "1em 1em 1em 0",
    height: "3em"
  }
};

const dataB = [
  {
    index: 0,
    _id: "5c9d0fc61cd66497a4a96870",
    name: "Michael Kirkland",
    picture: "http://placehold.it/32x32",
    gender: "female",
    age: 25,
    email: "michaelkirkland@mitroc.com",
    eyeColor: "brown",
    balance: "$3,102.20",
    guid: "a0b744b9-9300-4ef2-9404-c5d4e7529d2c",
    company: "MITROC",
    isActive: false
  },
  {
    index: 1,
    _id: "5c9d0fc60db87ff93be226af",
    name: "Claudia Lynn",
    picture: "http://placehold.it/32x32",
    gender: "female",
    age: 38,
    email: "claudialynn@kage.com",
    eyeColor: "green",
    balance: "$2,979.32",
    guid: "635b9e9e-f87f-4f03-939f-ea4d1e1cbeeb",
    company: "KAGE",
    isActive: true
  },
  {
    index: 2,
    _id: "5c9d0fc63d950eccbc47e7ef",
    name: "Boyer Rivera",
    picture: "http://placehold.it/32x32",
    gender: "male",
    age: 34,
    email: "boyerrivera@primordia.com",
    eyeColor: "blue",
    balance: "$2,489.29",
    guid: "67d2c96d-adc7-44b0-aec7-02c766f72a2f",
    company: "PRIMORDIA",
    isActive: false
  },
  {
    index: 3,
    _id: "5c9d0fc60102e26d3717cfbe",
    name: "Rowena Kramer",
    picture: "http://placehold.it/32x32",
    gender: "female",
    age: 35,
    email: "rowenakramer@dancity.com",
    eyeColor: "blue",
    balance: "$1,003.12",
    guid: "dd53c8df-0d42-4b75-807e-d578ab7768c4",
    company: "DANCITY",
    isActive: false
  },
  {
    index: 4,
    _id: "5c9d0fc61e6cd3c8a9cb2b85",
    name: "Caldwell Morrison",
    picture: "http://placehold.it/32x32",
    gender: "male",
    age: 39,
    email: "caldwellmorrison@navir.com",
    eyeColor: "green",
    balance: "$3,939.34",
    guid: "46f1313b-13dc-4ad7-aae9-ea75e43511ec",
    company: "NAVIR",
    isActive: true
  },
  {
    index: 5,
    _id: "5c9d0fc624948fa0ab59d688",
    name: "Leah Cantrell",
    picture: "http://placehold.it/32x32",
    gender: "female",
    age: 40,
    email: "leahcantrell@endipine.com",
    eyeColor: "green",
    balance: "$1,821.49",
    guid: "9798da29-dabc-4196-b497-955553a1bd4a",
    company: "ENDIPINE",
    isActive: false
  }
];

// const API_URL =
//   "http://www.json-generator.com/api/json/get/bOykqbJlpe?indent=2";
// const API_URL =
//   "http://www.json-generator.com/api/json/get/bTGUFfhDNe?indent=1";

class TableView2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      columns: [],
      result: [],
      apiURL: "http://www.json-generator.com/api/json/get/bTGUFfhDNe?indent=1"
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(this.state.apiURL);
    const json = await response.json();
    this.setState({ tableData: json, loading: true });
    this.getKeys(json);
    this.getColumns();
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value, result: [] }, () => {
      this.fetchData();
    });
  };
  ////////// get json keys into array //////////
  getKeys = data =>
    Object.keys(data[0]).forEach(x => {
      if (typeof data[0][x] === "object" && typeof data[0][x][0] !== "string") {
        let name = Object.keys(data[0][x][0]);

        this.state.result.push(...name);
      } else {
        this.state.result.push(x);
      }
    });
  ////////// get json keys into array //////////

  ////////// load json keys into columns //////////
  getColumns = () => {
    this.setState({
      columns: this.state.result.map(key => ({
        Header: key,
        accessor: key,
        width: 130,
        resizable: false,
        margin: "auto",
        textAlign: "left",
        style: {
          whiteSpace: "normal",
          fontWeight: "normal",
          textTransform: "none"
        }
      }))
    });
  };
  ////////// load json keys into columns //////////

  render() {
    const { tableData, columns } = this.state;
    const columnsB = Object.keys(dataB[0]).map(key => ({
      Header: key,
      accessor: key,
      width: 120,
      margin: "auto",
      filterable: true,
      defaultFilterMethod: (filter, row, column) => {
        const id = filter.pivotId.toLowercase() || filter.id;
        return row[id] !== undefined
          ? String(row[id])
              .startsWith(filter.value)
              .toLowerCase()
          : true;
      },
      style: {
        whiteSpace: "normal"
      }
    }));

    return (
      <div>
        <div>
          <h3>Data Visualization</h3>
          <div style={styles.div}>
            <FormControl variant="filled" style={styles.formControl}>
              <InputLabel htmlFor="data_source">Data Source</InputLabel>
              <Select
                native
                value={this.state.apiURL}
                onChange={this.handleChange("apiURL")}
                input={<FilledInput name="apiURL" id="data_source" />}
              >
                <option value="http://www.json-generator.com/api/json/get/bTGUFfhDNe?indent=1">
                  Data A
                </option>
                <option value="http://www.json-generator.com/api/json/get/bOykqbJlpe?indent=2">
                  Data B
                </option>
              </Select>
            </FormControl>

            <ReactTable
              className="-striped -highlight"
              data={tableData}
              columns={columns}
              Cell={({ value }) => String(value)}
              resolveData={data => data.map(row => row)}
              defaultPageSize={5}
              filterable
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                wordWrap: "break-word",
                borderRadius: "5px",
                width: "80vw",
                padding: "5px",
                whiteSpace: "normal",
                margin: "auto"
              }}
            />
            <h4>Line break here</h4>
            <br />
            <ReactTable
              className="-striped -highlight"
              data={dataB}
              columns={columnsB}
              Cell={({ value }) => String(value)}
              resolveData={data => data.map(row => row)}
              defaultPageSize={10}
              resizable="true"
              style={{
                wordWrap: "break-word",
                borderRadius: "5px",
                width: "80vw",
                margin: "50px auto",
                padding: "50px auto",
                whiteSpace: "normal"
              }}
            />
          </div>
          {/* <WebDataRocks report="https://cdn.webdatarocks.com/reports/report.json" /> */}
        </div>
      </div>
    );
  }
}
export default TableView2;
