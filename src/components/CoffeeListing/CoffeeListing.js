// src/components/About/index.js
import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import CreateCoffeeForm from '../../containers/CreateCoffeeForm/CreateCoffeeForm.js'
import '../../stylesheets/style.css';

export default class CoffeeListing extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='coffee-listing'>
            <img src={this.props.coffee.img}
              height="200"
              width="200" />
            <h4>{this.props.coffee.name}</h4>
            <p>{this.props.coffee.description}</p>
            <p>{this.props.coffee.tones}</p>
</div>
    );
  }
}
