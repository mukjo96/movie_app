import React, { Component } from "react";

import "./Searchbar.css";

class Searchbar extends Component {
  state = { text: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  onChange = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ text: value });
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.onFormSubmit}>
          <input
            className="search__input"
            value={this.state.text}
            type="text"
            onChange={this.onChange}
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
