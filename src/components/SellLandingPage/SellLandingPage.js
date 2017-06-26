// src/components/About/index.js
import React, { Component } from 'react';
import CreateButton from '../../containers/CreateButton/CreateButton.js'
import './style.css';

export default class SellLandingPage extends Component {


  render() {
    return (
      <div className='About'>
        <h1>
          Sell on Cough-E
        </h1>
        <CreateButton />
      </div>
    );
  }
}
