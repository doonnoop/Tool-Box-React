import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/video">Video</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/weather">Weather</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}