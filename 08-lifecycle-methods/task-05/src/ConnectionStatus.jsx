import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
      isOnline: 'online',
    }


  componentDidMount() {
    window.addEventListener('online', this.onlineHandler);
    window.addEventListener('offline', this.offlineHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineHandler);
    window.removeEventListener('offline', this.offlineHandler);
  }

  onlineHandler=()=> {
    this.setState({ isOnline: 'online' });
  }

  offlineHandler=()=> {
    this.setState({ isOnline: 'offline' });
  }




  // componentDidMount() {
  //   window.addEventListener('online', this.statusHandler);
  //   window.addEventListener('offline', this.statusHandler);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('online', this.statusHandler);
  //   window.removeEventListener('offline', this.statusHandler);
  // }
  //
  // statusHandler=(e)=> {
  //   this.setState({ isOnline: e.type});
  //   //this.setState({ isOnline: e.type === 'online' });
  // }


  render() {


    return (
      <div className={this.state.isOnline ? 'status' : "status status_offline"}>
        {this.state.isOnline}</div>
    );
  }
}

export default ConnectionStatus;


