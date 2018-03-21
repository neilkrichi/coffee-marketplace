import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <span><FontAwesome className='' name='copyright' size='1x' /> 2018 Neil Krichi </span> <br className="xs-only"/>
        <span className='pull-right right-footer-text'>Made with <FontAwesome className='' name='heart-o' size='1x' /> & <FontAwesome className='' name='coffee' size='1x' /> in Vancouver, <span>🇨🇦</span></span>
      </div>
    )
  }
}
