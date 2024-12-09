import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Col,Container,Row} from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Banner = () => {
  return (
    <div>
      <Container fluid>
        <Row className='justify-content-center text-align-center mt-5'  >
        <Col lg={8}>
        <Carousel>
      <Carousel.Item interval={4000}>
        <img  className="d-block w-100 " src={require('../assets/pizza1.jpg')} alt="first slide" />
        <Carousel.Caption>
        <h1>Margharita</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        
      <img  className="d-block w-100" src={require('../assets/pizza2.jpg')} alt="second slide" />
      <Carousel.Caption>
      <h1>Cheese pizza</h1>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img  className="d-block w-100" src={require('../assets/pizza1.jpg')} alt="first slide" />
      <Carousel.Caption>
        
          <h3>Margherita</h3>
          </Carousel.Caption>
       </Carousel.Item>
    </Carousel>

        </Col>
        </Row>
        <div className="text-center">
        <h2 className='display-5 mt-3'>Pizzaz for Every Occational</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quis illo numquam dolor natus totam doloribus, unde iure magnam ea praesentium itaque inventore. Id est deleniti facere minima optio aut.</p>
        </div>
      </Container>
    </div>
  )
}

export default Banner
