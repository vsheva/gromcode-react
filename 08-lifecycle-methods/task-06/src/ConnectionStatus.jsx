import React, { Component } from 'react';

class ConnectionStatus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOnline: 'online',
        };
    }

    componentDidMount() {
        window.addEventListener('online', this.onlineHandler);
        window.addEventListener('offline', this.offlineHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.onlineHandler);
        window.removeEventListener('offline', this.offlineHandler);
    }

    onlineHandler() {
        this.setState({ isOnline: 'online' });
    }

    offlineHandler() {
        this.setState({ isOnline: 'offline' });
    }

    render() {
        return (
            <div className={this.state.isOnline === 'offline' ? 'status status_offline' : 'status'}>
                {this.state.isOnline}
            </div>
        );
    }
}

export default ConnectionStatus;