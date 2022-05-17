import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = event => {
    const { name, value } = event.target; //магия
    this.setState({
      //магия
      userData: {
        ...this.state.userData, //магия
        [name]: value, //магия
      },
    });
  };
  render() {
    return (
      <div className="page">
        <main className="content">
          <ShoppingCart userData={this.state.userData} />

          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;
