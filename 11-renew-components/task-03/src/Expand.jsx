import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  showArrow = () => {
    this.setState({ isOpen: this.state.isOpen ? false : true });
  };

  render() {
    const { children, title } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button
            isOpen={this.state.isOpen}
            className="expand__toggle-btn"
            onClick={this.showArrow}
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>{
        this.state.isOpen ? (<div className="expand__content">{children}</div>) :null
      }


      </div>
    );
  }
}

export default Expand;
