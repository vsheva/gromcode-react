import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
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
    this.setState({ isOnline: true });
  }

  offlineHandler() {
    this.setState({ isOnline: false });
  }

  render() {
    return (
      <div className={this.state.isOnline === true ? 'status' : 'status status_offline'}>
        {this.state.isOnline ? "online" :"offline"}
      </div>
    );
  }
}

export default ConnectionStatus;
