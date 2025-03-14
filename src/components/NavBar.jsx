import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import { useState } from 'react';

function NavBar() {
  const [user, setUser] = useState(null); // Replace with actual user state

  return (
    <Navbar variant="dark" expand="lg" className="p-3 navbar-custom">
      <Navbar.Brand href="/" className="mx-auto text-center">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/shop.png"
          alt="Logo"
          style={{ width: '30px', height: '30px', marginRight: '10px' }}
        />
        <b>Thomas' Webstore</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mx-auto text-center">
          <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/allproducts" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
            All Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/modifyproduct" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
          Modify / Add Product
          </Nav.Link>       
        </Nav>
        <Form inline className="ml-auto mx-2 text-center">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav className="ml-auto mx-2 text-center">
          <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="Cart" style={{ width: '20px', height: '20px' }} />
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profile" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/user.png" alt="User" style={{ width: '20px', height: '20px' }} />
          </Nav.Link>
          <Nav.Item className="d-flex align-items-center mx-2">
            {user ? (
              <span className="text-white">Welcome, {user.name}</span>
            ) : (
              <Nav.Link as={NavLink} to="/signup" className="text-white">
                New user? Sign up here
              </Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;