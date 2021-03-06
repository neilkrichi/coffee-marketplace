// src/components/About/index.js
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import Navibar from './Navibar.js';
import CreateCoffeeForm from './CreateCoffeeForm.js';
import Footer from './Footer.js';



export default class SellingPage extends Component {


  render() {
    return (
      <div className=''>
        <Navibar />
        <div className='page-container'>
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
