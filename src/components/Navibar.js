import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';


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
              <NavItem eventKey={1}><Link to='/listings'>Discover</Link></NavItem>
              {/*<NavItem eventKey={2}><Link to='/blog'>Blog</Link></NavItem>*/}
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#"><Link to='/sell'>Sell on Roastr</Link></NavItem>
              {/*<NavItem eventKey={4} href="#"><Link to='/signup'>Sign Up</Link></NavItem>*/}
              {/*<NavItem eventKey={5} href="#"><Link to='/login'>Log In</Link></NavItem>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}
