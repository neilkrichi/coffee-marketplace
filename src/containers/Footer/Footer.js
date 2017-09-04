import React, { Component } from 'react';
import '../../stylesheets/style.css';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {

  render() {
    return (
      <div className='footer  '>
        <span>Copyright <FontAwesome className='' name='copyright' size='1x' /> 2017 NKricher </span>
        <span className='pull-right'>Made with <FontAwesome className='' name='heart-o' size='1x' /> & <FontAwesome className='' name='coffee' size='1x' /> in Vancouver, <span>🇨🇦</span></span>
      </div>
    )
  }
}
