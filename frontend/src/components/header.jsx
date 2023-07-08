import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg = 'dark' data-bs-theme="dark" expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <LinkContainer to = '/' >
          <Navbar.Brand href="/">MERN - Auth</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to = "/login">
              <Nav.Link>
                <FaSignInAlt /> Sign In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to = "/register">
              <Nav.Link>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;