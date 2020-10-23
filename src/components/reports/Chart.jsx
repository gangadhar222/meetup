import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    
    return (
      <div className="container">
        <Bar data={this.props.chartData} height={75} options={this.props.configuration} />
      </div>
    );
  }
}

export default Chart;
