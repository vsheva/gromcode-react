import React, {useState } from 'react';
import Dimensions from './Dimensions.jsx';


const Demo =()=> {
  const [isVisible, setIsVisible]=useState(true)

  return (
      <div>
        <div>
          <button className="btn" onClick={()=>setIsVisible(true)}>
            Show
          </button>
          <button className="btn" onClick={()=>setIsVisible(false)}>
            Hide
          </button>
        </div>
        {isVisible && <Dimensions />}
      </div>
  );
}

export default Demo;





/*
class Demo extends Component {
  state = {
    isVisible: false,
  };

  show = () => {
    this.setState({isVisible: true,});
  };

  hide = () => {
    this.setState({isVisible: false,});
  };

  render() {
    return (
        <div>
          <div>
            <button className="btn" onClick={this.show}>
              Show
            </button>
            <button className="btn" onClick={this.hide}>
              Hide
            </button>
          </div>
          {this.state.isVisible && <Dimensions />}
        </div>
    );
  }
}
*/
