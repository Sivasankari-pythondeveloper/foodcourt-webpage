import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Cartlist from './Cartlist';


const ApBar = ({ scrollToMenu, scrollToPick }) => {  // Accept scrollToMenu and scrollToPick as props
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className='text-danger'>
              <span><i className="bi bi-yelp"></i>Welcome to the Footcourt</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
              <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
              {/* Use onClick to trigger scrollToMenu */}
              <Nav.Link className='fw-bold' onClick={scrollToMenu}>Menu</Nav.Link>
              <Nav.Link href="#musttry" className='fw-bold' onClick={scrollToPick}>Must Try</Nav.Link> {/* Scroll to "Pick of the Week" */}
              <Nav.Link href="#contact" className='fw-bold'>Contact Us</Nav.Link>
              <Cartlist />
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ApBar;
