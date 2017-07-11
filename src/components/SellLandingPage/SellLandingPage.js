// src/components/About/index.js
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import CreateCoffeeForm from '../../containers/CreateCoffeeForm/CreateCoffeeForm.js'
import '../../stylesheets/style.css';
import Navibar from '../../containers/Navibar/Navibar.js';


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
            <Row>
              <Col md={7}>
                <CreateCoffeeForm />
              </Col>
              <Col md={5}>
                <CreateCoffeeForm />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
