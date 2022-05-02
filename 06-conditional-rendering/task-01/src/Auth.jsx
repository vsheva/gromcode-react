import React, {Component} from 'react';
import './auth.scss'
import Greeting from "./Greeting.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";


class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
        };
    }

    handleLogin =()=> {
        this.setState({isLoggedIn: true});
    }

    handleLogout =()=> {
        this.setState({isLoggedIn: false});
    }

    render() {
        let button = this.state.isLoggedIn
         ? <Login onLogin={this.handleLogin} />
         : <Logout onLogout={this.handleLogout}/>


            {/*// ? <button onClick={ this.handleLogout}>Logout</button>*/}
            {/*// : <button onClick={ this.handleLogin}>Login</button>*/}

        // if (this.state.isLoggedIn) {
        //     button = <button onClick={() => this.handleLogout()}>Logout</button>
        // } else {
        //     button = <button onClick={() => this.handleLogin()}>Login</button>
        // }

        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                <div>
                    {button}
                </div>
            </div>
        );
    }
}


export default Auth;