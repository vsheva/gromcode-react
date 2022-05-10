import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  createUser(dataUser) {
    console.log(dataUser);
  }

  render() {
    return (
      <div>
        <div>{<UserForm onSubmit={this.createUser} />}</div>
      </div>
    );
  }
}

export default App;
