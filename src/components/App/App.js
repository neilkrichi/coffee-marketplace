import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import '../../stylesheets/style.css';
import { Link } from 'react-router';
import SearchBar from '../../containers/SearchBar/SearchBar.js';



class App extends Component {
  render() {
    return (
      <div>
      <div className='App'>
        <div className="App-header">
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Cough-E</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={1} title="Discover" id="basic-nav-dropdown">
                  <MenuItem eventKey={1.1}><Link to='/listings'>Coffee beans</Link></MenuItem>
                  <MenuItem eventKey={1.2}>Ground coffee</MenuItem>
                </NavDropdown>
                <NavItem eventKey={2}><Link to='/blog'>Blog</Link></NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={3} href="#"><Link to='/sell'><button bsStyle="primary" bsSize="medium" className="">Sell on Cough-E</button></Link></NavItem>
                <NavItem eventKey={4} href="#"><Link to='/signup'><button bsStyle="primary" bsSize="medium" className="">Sign Up</button></Link></NavItem>
                <NavItem eventKey={5} href="#"><Link to='/login'><button bsStyle="primary" bsSize="medium" className="">Log In</button></Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <h1 className="App-logo"><span role='img'>☕️</span></h1>
          <h2>Welcome to Cough-E</h2>
            <p className="App-intro">
              Your favorite free-trade, organic, GMO-free, gluten-free, lactose-free, vegan, crossfit <strong> <span role='img'>☕️</span> Coffee <span role='img'>☕️</span>  </strong> marketplace
            </p>
        </div>
        <SearchBar />
      </div>
    </div>
    );
  }
}

export default App;
