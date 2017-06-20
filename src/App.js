import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import SignUpButton from './SignUpButton.js';


class App extends Component {
  render() {
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
              <NavItem eventKey={2} href="#">Sell on Cough-E</NavItem>
              <NavItem eventKey={1} href="#"><SignUpButton/></NavItem>
              <NavItem eventKey={2} href="#" className="sign-in">Sign In</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div className="App">
        <div className="App-header">
          <h1 className="App-logo">☕️</h1>
          <h2>Welcome to Cough-E</h2>
            <p className="App-intro">
              Your favorite free-trade, organic, GMO-free, gluten-free, lactose-free, vegan, crossfit <strong> ☕️ Coffee ☕️  </strong> marketplace
            </p>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
