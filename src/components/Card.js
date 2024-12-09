import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

const CardComponent = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  // Menu items array
  const menuItems = [
    {
      id: 1,
      title: 'Veg Cheese Burger',
      description: 'It\'s really delicious and fantastic.',
      src: require('../assets/burger.jpeg'),
    },
    {
      id: 2,
      title: 'Classic Veg Pizza',
      description: 'A classic pizza with mozzarella and fresh veggies.',
      src: require('../assets/burger2.jpg'),
    },
    {
      id: 3,
      title: 'Pasta Alfredo',
      description: 'Creamy and cheesy pasta with a hint of garlic.',
      src: require('../assets/pasta.jpg'),
    },
    {
      id:4,
      title:'Sandwich',
      description:'Veg cheesy sandwich',
      src: require('../assets/sand.jpeg')
    }
    // Add more items here as needed
  ];

  // Modal component
  function MyVerticallyCenteredModal(props) {
    const { title, description, src } = props.item || {};
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={src} alt={title} className="img-fluid mb-3" />
          <h4>{title}</h4>
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // Handle opening modal for the selected item
  const handleShowModal = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  return (
    <div className='mb-3'>
      <Row className="d-flex flex-row">
        {menuItems.map((item) => (
          <Col key={item.id}  md={5} lg={4} my-3  >  {/* You can adjust the column size here */}
           <Card style={{ width: '18rem', height: '400px' }}>
  <Card.Img
    variant="top"
    src={item.src}
    style={{ height: '250px', objectFit: 'cover' }}
  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="text-center">
                  <Button variant="primary" onClick={() => handleShowModal(item)}>
                    Order Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={selectedItem}
      />
    </div>
  );
}

export default CardComponent;
