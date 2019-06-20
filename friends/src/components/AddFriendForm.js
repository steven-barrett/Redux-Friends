import React, { Component } from 'react';
// import '../App.css';

class AddFriendForm extends Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  addFriend = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.state.friend.name === '') {
      return;
    }

    this.props.addFriend(this.state.friend);

    this.setState({
        friend: {
        name: '',
        age: '',
        email: ''
      }
    });
  }

  handleInputChange = ev => {
    ev.persist();
    let value = ev.target.value;

    this.setState(prevState => ({
        friend: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div className="friend-form">
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.friend.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.friend.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="email"
            value={this.state.friend.email}
            name="email"
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;
