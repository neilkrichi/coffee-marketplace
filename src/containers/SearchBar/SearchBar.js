// src/components/About/index.js
import React, { PropTypes, Component } from 'react';

import './style.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }



  render() {
    return (
      <form onSubmit=''>
      <label>
      <input type="text" value={this.state.value} onChange='' />
      </label>
      <input type="submit" value="Submit" />
      </form>
    );
  }
}
