import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

function Header() {
  return (
    <Navbar bg = 'dark' data-bs-theme="dark" expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">MERN - Auth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login">
                <FaSignInAlt /> Sign In
            </Nav.Link>
            <Nav.Link href="/register">
                <FaSignOutAlt /> Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;