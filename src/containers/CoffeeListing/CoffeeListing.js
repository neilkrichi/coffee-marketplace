// src/components/About/index.js
import React, { Component } from 'react';
import '../../stylesheets/style.css';

export default class CoffeeListing extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='coffee-listing'>
        <img className="image" alt="Listing" src={this.props.coffee.img}/>
        <div className='middle'>
          <div className='text'>
          <h4>{this.props.coffee.name}</h4>
          <p>{this.props.coffee.description}</p>
          <p>{this.props.coffee.tones}</p>
          </div>
        </div>
      </div>
    );
  }
}
