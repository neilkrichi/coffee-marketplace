// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class SellLandingPage extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Sell', className)} {...props}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}
