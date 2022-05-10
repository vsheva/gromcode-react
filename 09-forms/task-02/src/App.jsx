import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  createUser = userData => {
    console.log(userData);
  };

  render() {
    return (
      <div>
        <UserForm onSubmit={this.createUser} />
      </div>
    );
  }
}

export default App;
