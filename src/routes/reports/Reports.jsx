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
    const {data,locations,studentsCount,professionalsCount,averageTeamSize} = this.props;
    let location = []
    let personCount = []
    if(locations){
      for(let key in locations){
        location.push(key)
        personCount.push(locations[key])
      }
    }
    let ageData = {};
    let count = [studentsCount,professionalsCount]
    let attendees = {}
    let teamSize  = {}
    let locationData = {}
    let colours = []
    for(let i=0;i<location.length;i++){
      if(i%2===0){
        colours.push("rgba(194, 148, 50, 0.2)")
      }
      else{
        colours.push("rgba(194, 255, 50, 0.2)")
      }
    }
    if (data) {
      ageData = {
        labels: ["13-18", "18-25", "25+"],
        datasets: [
          {
            label: "Age representation",
            data: data,
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
      attendees = {
        labels: ["Students","Professionals"],
        datasets: [
          {
            label: "Attendees representation",
            data: count,
            borderColor: [
              "rgba(194, 148, 50, 0.2)",
              "rgba(194, 255, 50, 0.2)",
            ],
            backgroundColor: [
              "rgba(194, 148, 50, 0.2)",
              "rgba(194, 255, 50, 0.2)",
            ],
          },
        ],
      };
      teamSize = {
        labels: ['Average Teamsize'],
        datasets: [
          {
            label: "Average Teamsize",
            data: [averageTeamSize],
            borderColor: [
              "rgba(194, 148, 50, 0.2)",
            ],
            backgroundColor: [
              "rgba(194, 148, 50, 0.2)",
            ],
          },
        ],
      };
      locationData = {
        labels: location,
        datasets: [
          {
            label: "Locations representation",
            data: personCount,
            borderColor: colours,
            backgroundColor:colours,
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
        <Chart chartData={ageData} configuration={options} />
        <Chart chartData={attendees} configuration={options} />
        <Chart chartData={teamSize} configuration={options} />
        <Chart chartData={locationData} configuration={options} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.ages,
  studentsCount: state.reducer.studentsCount,
  professionalsCount: state.reducer.professionalsCount,
  averageTeamSize: state.reducer.averageTeamSize,
  locations: state.reducer.locations
});
const mapDispatchToProps = (dispatch) => ({
  getRequest: (payload) => dispatch(getRequest(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Reports);
