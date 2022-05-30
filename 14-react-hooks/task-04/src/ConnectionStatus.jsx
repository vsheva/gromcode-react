import React, {useState, useEffect} from 'react';


const ConnectionStatus = () => {

    const [status, setStatus] = useState({status:"online"})

    useEffect(() => {

        const handleOnline = () => {
            setStatus({status:"online"});
        }
        const handleOffline = () => {
            setStatus({status:"online"});
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline",handleOffline)

        return () => {
            window.removeEventListener("online", handleOffline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])


    return (
        <div>
            <div className={status === 'offline' ? "status_offline" : "status"}>
                {status}
            </div>
        </div>
    );

}

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
//       <div>
//         <div className ={ this.state.status==='offline' ? "status__offline" :"status"}>
//           {this.state.status}
//         </div>
//       </div>
//     );
//   }
// }
//


