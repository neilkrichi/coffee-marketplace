import React, { Component } from 'react';
import '../../stylesheets/style.css';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <FontAwesome
          className=''
          name='copyright'
          size='1x'
          />
      </div>
    )
  }
}
