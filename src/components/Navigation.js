import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="clearfix">
          <NavbarBrand href="/">Doonnoop</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/video">Video</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/weather">Weather</NavLink>
            </NavItem>
          </Nav>
          <a
            href="https://expensify-app-react-redux.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="expensify"
          >
            Expensify App
          </a>
        </Navbar>
        <br />
      </div>
    );
  }
}
