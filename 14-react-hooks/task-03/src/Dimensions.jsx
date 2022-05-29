import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });

    const handleResize = event => {
      const { innerWidth, innerHeight } = event.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };


    window.addEventListener('resize', handleResize);

    return () => {window.removeEventListener('resize', handleResize)};
    }, []);


  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;

/* class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions({ width: innerWidth, height: innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = event => {
    const { innerWidth, innerHeight } = event.target;
      console.log(event.target)
    this.setDimensions({ width: innerWidth, height: innerHeight });
  };

  setDimensions = ({ width, height }) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };
  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}

export default Dimensions;
*/
