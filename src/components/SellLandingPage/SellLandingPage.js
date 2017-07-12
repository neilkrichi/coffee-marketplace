// src/components/About/index.js
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import Navibar from '../../containers/Navibar/Navibar.js';
import CreateCoffeeForm from '../../containers/CreateCoffeeForm/CreateCoffeeForm.js';
import Footer from '../../containers/Footer/Footer.js';
import '../../stylesheets/style.css';



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
