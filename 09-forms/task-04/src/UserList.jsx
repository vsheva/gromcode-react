import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const newUserList = this.props.users.filter(({ name }) => {
      return name.toUpperCase().includes(this.state.filterText.toUpperCase());
    });

    return (
      <div>
        <Filter
          count={newUserList.length}
          onChange={this.handleChange}
          filterText={this.state.filterText}
        />
        <ul className="users">
          {newUserList.map(elem => (
            <User key={elem.id} name={elem.name} age={elem.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
