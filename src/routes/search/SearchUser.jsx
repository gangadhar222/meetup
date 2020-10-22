import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { getRequest } from "../../redux/action";
import { connect } from "react-redux";
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
    console.log(input)
    this.props.getRequest(input);
  }

  componentDidMount() {
    this.props.getRequest();
  }

  render() {
    const { data,match,id } = this.props;
    console.log(match,id)
    return (
      <div>
        <div className="container">
          <input
            placeholder="search for an user"
            className="input"
            name="input"
            onChange={this.handleChange}
          />
          <button className="btn margin" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <div className="row cardComponent">
          {data &&
            data.map((item) => {
              return (
                <div key={item.id} className="card col-md-6 col-lg-4 mb-5">
                  <h2>{item.data.name}</h2>
                  <p>{item.data.location}</p>
                  <p>
                    <button className="button" onClick={this.handleSearch}><Link to={`${match.url}/${item.id}`} className="btnLink">More Info</Link></button>
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
