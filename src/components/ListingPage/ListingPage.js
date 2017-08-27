// src/components/About/index.js
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router';

import CoffeeListing from '../../containers/CoffeeListing/CoffeeListing.js';
import CreateCoffeeForm from '../../containers/CreateCoffeeForm/CreateCoffeeForm.js';
import Navibar from '../../containers/Navibar/Navibar.js';
import Footer from '../../containers/Footer/Footer.js'
import '../../stylesheets/style.css';


export default class ListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeData: [],
      upvotedCoffees: [],
      isClicked: false
      loading: false;
    };
  }

  componentDidMount(){
    this.getCoffees();
  }

  getCoffees(){
    return axios.get('https://cocoapi.herokuapp.com/coffees')
    .then((response) => {
      this.setState({coffeeData: response.data});
    })
    .catch((error) => {
    });
  }

  upvoteCoffee(id){
    return axios.post('https://cocoapi.herokuapp.com/upvote/coffee' , {id: id})
    .then((response) => {
      const replaceCoffee = (coffees, refreshedCoffee) => {
        return coffees.map((coffee) => {
          if(coffee._id === refreshedCoffee._id){
            return refreshedCoffee
          }else{
            return coffee
          }
        })
      }

      let coffees = this.state.coffeeData
      let newCoffee = response.data.theCoffee
      let newCoffees = replaceCoffee(coffees, newCoffee)
      this.setState({coffeeData: newCoffees})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  upvoteCoffeeWrapper(id){
      // if the id of the coffee we're trying to upvote doesn't exist in the upvotedCoffees array
    	if(this.state.upvotedCoffees.indexOf(id) === -1){
        // upvote the coffee
    		this.upvoteCoffee(id)
        // add the id of the coffee we're trying to upvote to the upvotedCoffees array
        let upvotedCoffees = this.state.upvotedCoffees
        upvotedCoffees.push(id)
    		this.setState({
          upvotedCoffees: upvotedCoffees,
          isClicked: true
        })
    	}

    }

  render() {
    return (
      <div>
        <div className='listings'>
          <Navibar />
          <div className='container-fluid'>
            <h1>
              Listings
            </h1>
            <hr />
            <Link to='/sell'><button className="add-listing">Add a product</button></Link>
            <div className='grey-box'>
              <Row>
                {this.state.coffeeData.map((coffee)=>{
                  return(
                    <Col md={4} sm={6} xs={12}>
                      <CoffeeListing
                        coffee={coffee}
                        upvoteCoffee= {this.upvoteCoffeeWrapper.bind(this)}
                        />
                    </Col>
                  )
                })}
              </Row>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
