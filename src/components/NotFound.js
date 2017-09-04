// src/components/NotFound/index.js
import React, { Component } from 'react';
import Navibar from './Navibar.js';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='notfound'>
        <Navibar />
        <div className='container'>
        <h1>
          404 <small>Not Found 😭</small>
        </h1>
        </div>
      </div>
    );
  }
}
