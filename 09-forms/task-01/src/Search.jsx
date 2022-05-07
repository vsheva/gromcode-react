import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="search__input"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
