import React, { Component } from "react";
import { connect } from "react-redux";
import {getRequest} from '../../redux/action'
import Card from "../../components/card/Card";

class UserDetails extends Component {
    componentDidMount(){
        getRequest()
    }   
  render() {
    const { match, data } = this.props;
    const user = data.find(
      (user) => Number(user.id) === Number(match.params.id)
    );
    return (
      <div className="card">
        <Card data={user} />
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

export default connect(mapStateToProps,mapDispatchToProps )(UserDetails);
