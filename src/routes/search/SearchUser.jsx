import React, { Component } from "react";
import { getRequest } from "../../redux/action";
import { connect } from "react-redux";
import "./search.css";

export class SearchUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    this.props.getRequest();
  }

  render() {
    console.log(this.props.data, "props");
    const { data } = this.props;
    return (
      <div>
        <div className="container">
          <input
            placeholder="search for an user"
            className="input"
            name="input"
          />
          <button className="btn margin" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <div className="row cardComponent">
          {data &&
            data.map((item) => {
              return (
                <div class="card col-4 mb-5">
                  <h1>{item.data.name}</h1>
                  <p>{item.data.location}</p>
                  <p>
                    <button className="button">More info</button>
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
