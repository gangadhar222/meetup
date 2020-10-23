import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { getRequest } from "../../redux/action";
import { connect } from "react-redux";
import Button from '../../components/button/Button'
import "./search.css";

export class SearchUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearch = ()=>{
    let {input} = this.state
    this.props.getRequest(input);
  }

  componentDidMount() {
    this.props.getRequest();
  }

  render() {
    const { data,match} = this.props;
    return (
      <div>
        <div className="container">
          <input
            placeholder="search for an user"
            className="input" 
            name="input"
            onChange={this.handleChange}
          />
         <p  className="margin"  onClick={this.handleSearch}><Button label="Search" /></p> 
        </div>
        <div className="row cardComponent">
          {data &&
            data.map((item) => {
              return (
                <div key={item.id} className="card col-md-6 col-lg-3 mb-5">
                  <h2>{item.data.name}</h2>
                  <p>{item.data.location}</p>
                  <p>
                    <Link to={`${match.url}/${item.id}`} className="btnLink" ><Button className="button" label="More Info" /></Link>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getRequest: (payload) => dispatch(getRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
