import React, { Component } from 'react';
import Dialog from './Dialog.jsx';

class App extends Component {
  state = {
    isOpen: false,
  };

  showDialog = () => {
    this.setState({ isOpen: true });
  };

  hideDialog = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog isOpen={this.state.isOpen} title="Some text" onClose={this.hideDialog}>
          <div className="dialog__content">
            <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default App;
