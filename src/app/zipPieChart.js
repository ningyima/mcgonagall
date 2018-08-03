import React, { Component } from 'react';
import Chart from "react-google-charts";
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const pieOptions = {
  // "pass zipcode by index props here"
  title: "Favorites of 94123",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 50,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

class ZipPieChart extends Component {
  constructor(props) {
    super(props);
      this.state = {
      chartImageURI: ""
    };
  }

  //convert data from db into proper format if needed and then pass as data value for the Chart component
  formattedData() {
    const ourData = this.props.data;

    let resultArray = [["Age", "Weight"]];

    for (var key in ourData) {
      resultArray.push([key, Number(ourData[key])]);
    }

    console.log('did this format', resultArray)
    return resultArray;
    // [["Age", "Weight"], ["American", 5], ["French", 2], ["Chinese", 3], ["Mexican", 8],["Italian", 12], ["Indian", 5]]
  }

  render() {
    console.log('here is the data passed in', this.props.data)
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={this.formattedData()}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    );
  }
}

export default ZipPieChart;

