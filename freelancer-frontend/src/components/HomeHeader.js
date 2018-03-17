import React, {Component} from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {withRouter} from "react-router-dom";

class HomeHeader extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/login">
                            <NavItem eventKey={1} >
                                Login
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <NavItem eventKey={2} >
                                Sign Up
                            </NavItem>
                        </LinkContainer>
                        <NavItem eventKey={1} onClick={this.props.logout.bind(this)}>
                            Logout
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default withRouter(HomeHeader);
