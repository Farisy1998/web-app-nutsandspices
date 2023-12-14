import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <h3>Nuts And Spices</h3>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link id="link1" to="/home" style={{ color: "#fff" }}>
            Home
          </Link>
          <Link id="link2" to="/cart" style={{ color: "#fff" }}>
            Cart
          </Link>
          <Link id="link3" to="/orders" style={{ color: "#fff" }}>
            Orders
          </Link>
          <Link id="link3" to="/profile" style={{ color: "#fff" }}>
            Profile
          </Link>
          <Link id="link3" to="/" style={{ color: "#fff" }}>
            LogOut
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
