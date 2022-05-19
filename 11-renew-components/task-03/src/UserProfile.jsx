import React, { Component } from 'react';

class UserProfile extends Component {


  render() {
    //const { user } = this.state;
    if (!this.props.userData) {
      return null;
    }

    const { avatar_url, location, name } = this.props.userData;
    //this.state.user.avatar_url

    return (
      <div className="user">
        <img alt="Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;

// return (
//   <div className="user">
//     <img alt= "Avatar" src={this.state.user.avatar_url} className="user__avatar" />
//     <div className="user__info">
//       <span className="user__name">{this.state.user.name}</span>
//       <span className="user__location">{this.state.user.location}</span>
//     </div>
//   </div>
// );
