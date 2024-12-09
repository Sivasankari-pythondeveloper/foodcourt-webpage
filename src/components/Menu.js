import React, { useState, forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './Card';

const Menu = forwardRef((props, ref) => {  // Use forwardRef to forward the ref to the DOM element
  return (
    <section id="menu" className='bg-light' ref={ref}>  {/* Attach the ref to the section */}
      <Container>
        <h3 className='text-primary text-center my-3 py-3'>
          Treat Yourself with our Everyday Menu <span><i className="bi bi-tiktok"></i></span>
        </h3>
        <Row>
        <Col >
         
              <CardComponent />
            </Col>
          
        </Row>
      </Container>
    </section>
  );
});

export default Menu;
