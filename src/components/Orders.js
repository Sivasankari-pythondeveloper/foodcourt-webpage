import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const Orders = () => {
  return (
    <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold"> Margherita</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        2
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold"> Cheese pizza</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        4
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Fazita</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        5
      </Badge>
    </ListGroup.Item>
  </ListGroup>

  )
}

export default Orders
