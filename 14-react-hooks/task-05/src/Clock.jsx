import React, {useState, useEffect } from 'react';
import moment from 'moment';

const Clock = (props) => {

  const[date,setDate]=useState( new Date())

  useEffect(() => {
   const interval = setInterval(() => {
      setDate( new Date() )}, 1000);

   return ()=>{
     clearInterval(interval);
    }

  },[date])

  const getTimeWithOffset=()=> {
    const utcOffset = new Date().getTimezoneOffset() / 60;
    return new Date(new Date().setHours(new Date().getHours() + props.offset + utcOffset));
  }

  return (
      <div className="clock">
        <div className="clock__location">{props.location}</div>
        <div className="clock__time">{moment(getTimeWithOffset()).format('LTS')}</div>
      </div>
  );

}


export default Clock;


// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }
//
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({ date: new Date() });
//     }, 1000);
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//
//   getTimeWithOffset() {
//     const utcOffset = new Date().getTimezoneOffset() / 60;
//     return new Date(new Date().setHours(new Date().getHours() + this.props.offset + utcOffset));
//   }
//
//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">{moment(this.getTimeWithOffset()).format('LTS')}</div>
//       </div>
//     );
//   }
// }


