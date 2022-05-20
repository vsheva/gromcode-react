import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggleMessage = () => {
    this.setState({ isOpen: this.state.isOpen ? false : true });
  };

  render() {
    const { children, title } = this.props;
    const arrow= this.state.isOpen ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleMessage}>
            {arrow}
          </button>
        </div>
        {this.state.isOpen ? (<div className="expand__content">{children}</div>) : null}
      </div>
    );
  }
}

export default Expand;
