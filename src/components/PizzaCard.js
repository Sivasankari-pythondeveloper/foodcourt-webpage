import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PizzaCard = () => {
  return (
    <Card className='my-3'>
    <Card.Img variant="top" src={require('../assets/burger.jpeg')} />
    <Card.Body>
      <Card.Title>Veg cheese Burger</Card.Title>
      <Card.Text>
        Its really delicious and fantastic
      </Card.Text>
      <Button variant="primary">Order Now</Button>
    </Card.Body>
  </Card>
  )
}

export default PizzaCard
