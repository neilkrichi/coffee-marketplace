// src/components/NotFound/index.js
import React, { Component } from 'react';
import '../../stylesheets/style.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='NotFound'>
        <h1>
          404 <small>Not Found 😭</small>
        </h1>
      </div>
    );
  }
}
