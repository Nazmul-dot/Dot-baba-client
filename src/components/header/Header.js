import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../useHooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-danger">
            Travel Guro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {!user.email ? (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/myorder">
                    My Order
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageservice">
                    Manage Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addservice">
                    Add Service
                  </Nav.Link>
                  <Navbar.Text>
                    Signed in as: <Link to="/">{user.displayName}</Link>
                  </Navbar.Text>
                  <Button
                    onClick={logout}
                    variant="outline-danger"
                    className="text-white rounded-pill border border-2 border-danger"
                  >
                    Logout
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
