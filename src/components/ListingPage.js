// src/components/About/index.js
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router';

import CoffeeListing from './CoffeeListing.js';
import CreateCoffeeForm from './CreateCoffeeForm.js';
import Navibar from './Navibar.js';
import Footer from './Footer.js'


export default class ListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeData: [],
      upvotedCoffees: [],
      isClicked: false,
      loading: false
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
    if (this.state.coffeeData.length === 0) {
      return (
        <div>
          <div className=''>
            <Navibar />
            <div className='page-container'>
              <h1>
                Listings
              </h1>
              <hr />
              <Link to='/sell'><button className="add-listing">Add a product</button></Link>
              <div className='listings'>
                <h1>Loading coffees...</h1>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
    return (
      <div>
        <div className=''>
          <Navibar />
          <div className='page-container'>
            <h1>
              Listings
            </h1>
            <hr />
            <Link to='/sell'><button className="add-listing">Add a product</button></Link>
            <div className='listings'>
                {this.state.coffeeData.map((coffee)=>{
                  return(
                    <div className='single-listing'>
                      <CoffeeListing
                        coffee={coffee}
                        upvoteCoffee= {this.upvoteCoffeeWrapper.bind(this)}
                        />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
