// src/components/About/index.js
import React, { Component } from 'react';
import {Link} from 'react-router';
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
          <h2>{this.props.coffee.name}</h2>
          <h4>{this.props.coffee.tones}</h4>
          <h4>{this.props.coffee.roastingLevel}</h4>
          <p>{this.props.coffee.description}</p>
          <a href={this.props.coffee.url} target="_blank" className='website cta-button'>Get yours here</a>
          </div>
        </div>
      </div>
    );
  }
}
