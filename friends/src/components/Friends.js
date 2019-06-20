import React from "react";

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Friend from "./Friend";
import {getData} from '../actions/index'; 
import {addFriend} from '../actions/index'; 
import AddFriendForm from './AddFriendForm';

import '../index.css';

class Friends extends React.Component {
  componentDidMount() {
      this.props.getData();
  }

  addFriend = item => {
      this.props.addFriend(item);
      this.forceUpdate();
  }
render() {
    return (
        <div className='friends-div'>
        {this.props.friends.map(friend => {        
            return <Friend key={friend.id} friend={friend} />;
          })}
        <AddFriendForm addFriend={this.addFriend} />
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
      { getData, addFriend }
    )(Friends)
  );
  