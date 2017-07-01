// src/components/About/index.js
import React, { Component } from 'react';
import '../../stylesheets/style.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      query: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('You got it! ' + this.state.query + " is on the way.");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
       Fancy some coffee?
      <input type="text" name='query' value={this.state.query} onChange={this.handleInputChange}/>
      </label>
      <input type="submit" value="Submit" />
      </form>
    );
  }
}
