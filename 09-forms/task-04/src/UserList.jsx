import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };




  render() {
      const filteredUsers = this.props.users.filter(user => user.....)



    return (
      <div>
        <Filter
          filterText={this.props.filterText}
          count={this.props.count}
          onChange={this.handleChange}
        />
        <ul className="users">
          <User name={this.props.name} age={this.props.age}  />
        </ul>
      </div>
    );
  }
}

export default UserList;
