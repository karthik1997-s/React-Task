import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import {  BsFillCartFill } from "react-icons/bs";
import {useSelector} from 'react-redux';

function Header() {

  const getdata = useSelector((state) => state.ProductReducer);
  

  return (
        <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home" >Home</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Casual shirts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Formal shirts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
          </Navbar.Collapse>
          <Badge className="basket"><BsFillCartFill  className="cart-icon"/><span>{getdata.carts.length}</span></Badge>
          <span>10</span>

          <Nav>
            <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link eventKey={2} href="/register">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
        
    </Navbar>
    </>
  )
}

export default Header;