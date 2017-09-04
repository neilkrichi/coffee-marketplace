// src/components/About/index.js
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import Navibar from './Navibar.js';
import CreateCoffeeForm from './CreateCoffeeForm.js';
import Footer from './Footer.js';



export default class SellLandingPage extends Component {


  render() {
    return (
      <div className='sell'>
        <Navibar />
        <div className='container-fluid'>
          <h1>
            Sell on Roastr
          </h1>
          <div className='grey-box'>
            <CreateCoffeeForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
