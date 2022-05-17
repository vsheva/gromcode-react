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
      const{userData} = this.state
    return (
      <div className="page">
          <h1>{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userData={this.state.userData} />

          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;

//const {userData} = this.state