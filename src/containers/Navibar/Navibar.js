import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';

import '../../stylesheets/style.css';


export default class Navibar extends Component {

  render() {
    return (

      <div className='navibar'>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><Link to='/home'>Roastr</Link></a>
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
              <NavItem eventKey={3} href="#"><Link to='/sell'>Sell on Roastr</Link></NavItem>
              <NavItem eventKey={4} href="#"><Link to='/signup'>Sign Up</Link></NavItem>
              <NavItem eventKey={5} href="#"><Link to='/login'>Log In</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}
