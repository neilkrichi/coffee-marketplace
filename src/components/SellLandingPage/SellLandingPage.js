// src/components/About/index.js
import React, { Component } from 'react';
import CreateCoffeeForm from '../../containers/CreateCoffeeForm/CreateCoffeeForm.js'
import '../../stylesheets/style.css';
import Navibar from '../../containers/Navibar/Navibar.js';


export default class SellLandingPage extends Component {


  render() {
    return (
      <div className='sell'>
        <Navibar />
        <div className='container'>
          <h1>
            Sell on Roastr
          </h1>
          <CreateCoffeeForm />
        </div>
      </div>
    );
  }
}
