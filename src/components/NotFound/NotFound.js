// src/components/NotFound/index.js
import { React, Component } from 'react';

import './style.css';

export default class NotFound extends Component {

  render() {
    return (
      <div className='NotFound'>
        <h1>
          404 <small>Not Found <span role='img' aria-label='sad-emoji'>😭</span></small>
        </h1>
      </div>
    );
  }
}
