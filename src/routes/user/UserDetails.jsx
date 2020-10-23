import React from 'react';
import {connect} from 'react-redux';

function UserDetails(props) {
    const {match,data} = props
    const user = data.find(user =>Number(user.id)===Number(match.params.id)) 
    return (
        <div className="card">
            <h2>
                {user.data.name}
            </h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.reducer.data,
  });
  
  export default connect(mapStateToProps)(UserDetails);