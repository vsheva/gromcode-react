import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeWithOffset() {
    const utcOffset = new Date().getTimezoneOffset() / 60;
    return new Date(new Date().setHours(new Date().getHours() + this.props.offset + utcOffset));
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{moment(this.getTimeWithOffset()).format('LTS')}</div>
      </div>
    );
  }
}

export default Clock;
