import React, { Component } from "react";
import Chart from "../../components/reports/Chart";
import { connect } from "react-redux";
import { getRequest } from "../../redux/action";

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getRequest();
  }

  render() {
    let data = {};
    if (this.props.data) {
      data = {
        labels: ["13-18", "18-25", "25+"],
        datasets: [
          {
            label: "Age representation",
            data: this.props.data,
            borderColor: [
              "rgba(194, 148, 50, 0.2)",
              "rgba(194, 255, 50, 0.2)",
              "rgba(194, 173, 134, 0.4)",
            ],
            backgroundColor: [
              "rgba(194, 148, 50, 0.2)",
              "rgba(194, 255, 50, 0.2)",
              "rgba(194, 173, 134, 0.4)",
            ],
          },
        ],
      };
    }
    const options = {
        title: {
          display: true,
          text: "Bar Chart",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 20,
                stepSize: 5,
              },
            },
          ],
        },
      };
    return (
      <div>
        <Chart chartData={data} configuration={options} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.ages,
});
const mapDispatchToProps = (dispatch) => ({
  getRequest: (payload) => dispatch(getRequest(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Reports);
