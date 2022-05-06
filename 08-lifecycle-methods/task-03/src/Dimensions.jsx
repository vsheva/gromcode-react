import React, { Component } from 'react';


class Dimensions extends Component {

  
  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
  }
}

export default Dimensions;
