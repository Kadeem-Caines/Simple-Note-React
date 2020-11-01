import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div >
      
       
       <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand>Simple Note App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="https://kadeem-caines.github.io/Website-Portfolio/">Home</Nav.Link>
    </Nav>
    <Button variant="outline-info" href="mailto:kadeem.caines@gmail.com">Contact</Button>
   
  </Navbar>

    </div>
  );
}

export default NavBar;