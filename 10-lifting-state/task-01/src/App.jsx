import React, {Component} from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
        };
    }

    componentDidMount() {
        this.fetchUser(this.props.userId); // (!!!)
    }

    fetchUser = userId => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                this.setState({
                    userData: userData, // misstake (!!!)
                });
            });
    };

    render() {
        return (
            <div className="page">
                <header className="header">
                    <UserMenu userData={this.state.userData}/>
                </header>
                <UserProfile userData={this.state.userData}/>
            </div>
        );
    }


};

export default App;
