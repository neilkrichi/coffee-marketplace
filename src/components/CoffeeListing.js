// src/components/About/index.js
import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

export default class CoffeeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      upvotes: 0
    };
  }


  render() {
    return (
      <div className='coffee'>
      <div className='coffee-listing'>
        <img className="image" alt="Listing" src={this.props.coffee.img}/>
      {/*  <div className='middle'>
          <div className='text'>
          <h2>{this.props.coffee.name}</h2>
          <h4>{this.props.coffee.tones}</h4>
          <h4>{this.props.coffee.roastingLevel}</h4>
          <p>{this.props.coffee.description}</p>
          <a href={this.props.coffee.url} target="_blank" className='website cta-button'>Get yours here</a>
          </div>
        </div>
        */}
      </div>
      <span type='button' className=' pull-right'>
         {this.props.coffee.votes} <FontAwesome name='heart-o' size='1x'/>
      </span>
      <button
        className={this.state.isClicked ? "red-heart" : ''}
        onClick={()=>{this.props.upvoteCoffee(this.props.coffee._id)}}>
        Upvote
    </button>
  </div>
    );
  }
}
