import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome'
import '../stylesheets/style.css';


export default class Navibar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false,
    }
  }

  togglePopup(){
    this.setState({popupOpen: !this.state.popupOpen})
    // this.setState({a : b}) > a = b
    // TOGGLE BETWEEN 2 STATES
  }

  renderClosed(){
    return(
      <div onClick={this.togglePopup.bind(this)} className='closed'>
      </div>
    )
  }

  renderOpen(){
    return(
          <ul className='navbar-list navbar-list-mobile'>
            <Link to='/listings'><li>Discover</li></Link>
            <Link to='/sell'><li id='no-border'>Sell</li></Link>
          </ul>
    )
  }

  renderPopup(){
    return this.state.popupOpen ? this.renderOpen() : this.renderClosed()
  }

  renderBurgerIcon() {
    if (this.state.popupOpen) {
      return 'times'
    }
    else {
      return 'bars'
    }
  }

  render() {
    return (
      <div className='topnav'>
        <div className='App-header xs-only'>
          <div className='logo-img'>
            <Link to='/home'><h2>Roastr</h2></Link>
          </div>
          <FontAwesome onClick={this.togglePopup.bind(this)} className="fa pull-right burger-menu" name={this.renderBurgerIcon()} size='2x' />
        </div>
        <div className='xs-only'>
          {this.renderPopup()}
        </div>
        <div className="App-header hide-xs">
          <div className='logo-img'>
            <Link to='/home'><h2>Roastr</h2></Link>
          </div>
          <div className='site-map'>
            <ul className='navbar-list'>
              <Link to='/listings'><li>Discover</li></Link>
              <Link to='/sell'><li>Sell</li></Link>
              <Link to='/signup'><li>Sign Up</li></Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
