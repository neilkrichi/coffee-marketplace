// src/components/About/index.js
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

import CoffeeListing from '../../containers/CoffeeListing/CoffeeListing.js';
import CreateCoffeeForm from '../../containers/CreateCoffeeForm/CreateCoffeeForm.js';
import Navibar from '../../containers/Navibar/Navibar.js';
import '../../stylesheets/style.css';


export default class ListingPage extends Component {


componentWillMount(){
    this.getCoffees();
}

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      tasteTone: 'Bitter',
      description: '',
      imgUrl: '',
      coffeeData: []
    };
  }

  getCoffees(){
    return axios.get('https://cocoapi.herokuapp.com/coffees')
      .then((response) => {
        this.setState({coffeeData: response.data});
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }





  render() {
    return (
      <div className='listings'>
        <Navibar />
        <div className='container'>
        <h1>
          Listings
        </h1>
      <hr />
        <CreateCoffeeForm />

        <Row>
          {this.state.coffeeData.map((coffee)=>{
            return(
              <Col md={4}>
                <CoffeeListing coffee={coffee}/>
              </Col>
            )
          })}
        </Row>

      <hr />
        <CreateCoffeeForm />
        </div>
      </div>
    );
  }
}
