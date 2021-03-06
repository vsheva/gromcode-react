import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data });
      });
  }

  // componentDidMount() {
  //   this.fetchUser(this.props.userId)
  // }
  //
  // fetchUser =(userId)=>{
  //   fetch(`https://api.github.com/users/${userId}`)
  //       .then(response => response.json())
  //       .then(data => {this.setState({
  //         user: data,
  //       });
  //       });
  // }

  render() {
    //const { user } = this.state;
    if (!this.state.user) {
      return null;
    }

    //const { avatar_url, location, name } = user;

    return (
      <div className="user">
        <img alt="Board Avatar" src={this.state.user.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{this.state.user.name}</span>
          <span className="user__location">{this.state.user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
