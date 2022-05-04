import React, { Component } from 'react';

import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isSpinnerOn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: false, isSpinnerOn: true });
    setTimeout(() => {
      this.setState({ isLoggedIn: true, isSpinnerOn: false });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false, isSpinnerOn: false });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );

    return (
      <div className="panel">
        <div>{this.state.isSpinnerOn && <Spinner size={'20px'} />}</div>
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;

//let button
// if (this.state.isLoggedIn) {
//     button = <button onClick={() => this.handleLogout()}>Logout</button>
// } else {
//     button = <button onClick={() => this.handleLogin()}>Login</button>
// }
