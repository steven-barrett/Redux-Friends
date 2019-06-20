import React from "react";

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Friend from "./Friend";
import {getData} from '../actions/index'; 
import '../index.css';

class Friends extends React.Component {
  componentDidMount() {
      this.props.getData();
  }
render() {
    return (
        <div className='friends-div'>
        {this.props.friends.map(friend => {        
            return <Friend key={friend.id} friend={friend} />;
          })}
        </div>
    )
}
};

const mapStateToProps = ({ error, friends, fetchingData }) => ({
    error,
    friends,
    fetchingData
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getData }
    )(Friends)
  );
  