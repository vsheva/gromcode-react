import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleOnline = () => {
      setStatus('online');
    };

    const handleOffline = () => {
      setStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  });

  return <div className={`status ${status==="offline"? "status_offline": ""}`}>{status}</div>;
};

export default ConnectionStatus;

//
//
// class ConnectionStatus extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       status: "online"
//     };
//   }
//
//   componentDidMount() {
//     window.addEventListener("online", this.handleOnline)
//     window.addEventListener("offline", this.handleOffline)
//   }
//
//
//
//   componentWillUnmount() {
//     window.removeEventListener('online', this.handleOnline)
//     window.removeEventListener('offline', this.handleOffline)
//   }
//
//
// handleOnline=()=>{
//     this.setState({status: "online"});
//   }
//
//   handleOffline=()=>{
//     this.setState({status: "offline"});
//   }
//
//
//
//
//   render() {
//     return (
//         <div className ={ this.state.status==='offline' ? "status__offline" :"status"}>
//           {this.state.status}
//       </div>
//     );
//   }
// }
//
