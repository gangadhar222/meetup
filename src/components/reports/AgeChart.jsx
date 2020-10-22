import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import {getRequest} from '../../redux/action'

class AgeChart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:{
                 labels:["13-18","18-25","25+"],
                 datasets:[{
                     label:'age representation',
                     data:[],
                     borderColor:['rgba(194, 148, 50, 0.2)','rgba(194, 255, 50, 0.2)','rgba(194, 173, 134, 0.4)'],
                     backgroundColor:['rgba(194, 148, 50, 0.2)','rgba(194, 255, 50, 0.2)','rgba(194, 173, 134, 0.4)']
                 }]
             }
        }
    }

    componentDidMount(){
        console.log(this.props.data)
        const temp = this.state.data
        temp['datasets'][0]['data'] = this.props.data
        console.log(temp)
        this.setState({
            data:temp
        })
    }
    
  render() {
      const options = {
          title:{
              display:true,
              text:'Bar Chart'
          },
          scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:20,
                        stepSize:5
                    }
                }
            ]
          }
      }
    return (
      <div>
        <Bar
          data={this.state.data}
          height={100}
          options={options}
        />
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
export default connect(mapStateToProps,mapDispatchToProps)(AgeChart);
