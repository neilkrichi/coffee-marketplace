// src/components/About/index.js
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../stylesheets/style.css';


export default class ListingPage extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='listings'>
        <h1>
          Listings
        </h1>
        <FontAwesome
          className='checkmark'
          name='check'
        />
      </div>
    );
  }
}
