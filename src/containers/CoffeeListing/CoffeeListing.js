// src/components/About/index.js
import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import '../../stylesheets/style.css';

export default class CoffeeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      upvotes: 0,
      coffee: {}
    };
  }



  upvoteCoffee(){
    return axios.post('https://cocoapi.herokuapp.com/upvote/coffee' , {id: this.props.coffee._id})
      .then((response) => {
        this.setState({coffee: response.data.theCoffee});
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


  }


  render() {
    return (
      <div className='coffee'>
      <div className='coffee-listing'>
        <img className="image" alt="Listing" src={this.props.coffee.img}/>
        <div className='middle'>
          <div className='text'>
          <h2>{this.props.coffee.name}</h2>
          <h4>{this.props.coffee.tones}</h4>
          <h4>{this.props.coffee.roastingLevel}</h4>
          <p>{this.props.coffee.description}</p>
          <a href={this.props.coffee.url} target="_blank" className='website cta-button'>Get yours here</a>
          </div>
        </div>
      </div>
      <span type='button' className=' pull-right'>
         {this.props.coffee.votes}
      </span>
      <button className={this.state.isClicked ? "red-heart" : ''} onClick={this.upvoteCoffee.bind(this)}>
      <FontAwesome name='heart-o' size='1x'/>  Upvote
    </button>
  </div>
    );
  }
}
