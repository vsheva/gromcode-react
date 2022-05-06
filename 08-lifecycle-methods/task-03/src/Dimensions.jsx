import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width: width,
      height: height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}

export default Dimensions;
