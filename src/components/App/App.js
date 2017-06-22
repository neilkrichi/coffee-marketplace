import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './style.css';
import SignUpButton from './SignUpButton.js';
import {browserHistory, Link} from 'react-router';



class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Cough-E</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">How it works</NavItem>
              <NavDropdown eventKey={2} title="What we sell" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>Coffee beans</MenuItem>
                <MenuItem eventKey={2.2}>Ground coffee</MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="#">Blog</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#"><Link to='/sell'><button bsStyle="primary" bsSize="medium" className="">Sell on Cough-E</button></Link></NavItem>
              <NavItem eventKey={1} href="#"><Link to='/signup'><button bsStyle="primary" bsSize="medium" className="">Sign Up</button></Link></NavItem>
              <NavItem eventKey={2} href="#"><Link to='/signup'><button bsStyle="primary" bsSize="medium" className="">Log In</button></Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <h1 className="App-logo"><span role='img'>☕️</span></h1>
          <h2>Welcome to Cough-E</h2>
            <p className="App-intro">
              Your favorite free-trade, organic, GMO-free, gluten-free, lactose-free, vegan, crossfit <strong> <span role='img'>☕️</span> Coffee <span role='img'>☕️</span>  </strong> marketplace
            </p>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
