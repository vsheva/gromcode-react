import React, { useState} from 'react';
import Clock from './Clock.jsx';


const App =()=>{
    const [visible, setVisible]=useState(true);


  const toggle=()=> {
      setVisible(visible==true ? false : true);
  }

    return (
        <div>
            <button onClick={()=>toggle()}>Toggle</button>
            <div>{visible && <Clock location={'London'} offset={0} />}</div>
            <div>{visible && <Clock location={'Kyiv'} offset={2} />}</div>
            <div>{visible && <Clock location={'New York'} offset={-5} />}</div>
        </div>
    );
}

export default App;



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: true,
//     };
//   }
//
//   toggle() {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle.bind(this)}>Toggle</button>
//         <div>{this.state.visible && <Clock location={'London'} offset={0} />}</div>
//         <div>{this.state.visible && <Clock location={'Kyiv'} offset={2} />}</div>
//         <div>{this.state.visible && <Clock location={'New York'} offset={-5} />}</div>
//       </div>
//     );
//   }
// }
//
// export default App;

