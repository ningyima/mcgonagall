import React, { Component } from 'react';
import Chart from "react-google-charts";
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const pieOptions = {
  title: "",
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
    top: 0,
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

  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={[["Age", "Weight"], ["a", 12], ["b", 5.5]]}
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

