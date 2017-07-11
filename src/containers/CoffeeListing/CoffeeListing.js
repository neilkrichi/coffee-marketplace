// src/components/About/index.js
import React, { Component } from 'react';
import {Link} from 'react-router';
import FontAwesome from 'react-fontawesome';
import '../../stylesheets/style.css';

export default class CoffeeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      upvotes: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleUpvoteChange(){
    if (this.state.isClicked === false) {
      this.setState({upvotes: (this.state.upvotes + 1)})
    }
    else {
      this.setState({upvotes: (this.state.upvotes - 1)})
    }

  }


  handleClick() {
    this.setState({isClicked: !this.state.isClicked})
    this.handleUpvoteChange();
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
         {this.state.upvotes}
      </span>
      <button className={this.state.isClicked ? "red-heart" : ''} onClick={this.handleClick}>
      <FontAwesome name='heart-o' size='1x'/>  Upvote
    </button>
  </div>
    );
  }
}
