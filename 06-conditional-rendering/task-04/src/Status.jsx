import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';



// class Status extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       status: props.isOnline
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.status ? <Offline /> : <Online />}
//       </div>
//     );
//   }
// }


//refactoring

const Status = (props)=> {
  if (props.isOnline) {
    return <Online />
  }
  return <Offline />
}


export default Status;
