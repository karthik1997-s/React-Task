import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { ADD } from '../store/actions/action';
function Products() {
  const state = useSelector((state) => state.ProductReducer)
  console.log("--------------",state)

  const dispatch = useDispatch();

  const send = (product) => {
  
    dispatch(ADD(product));
  }

  return (
    
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        state.data.map(product => {
       return   <Col>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
               {product.desc}
              </Card.Text>
              <Card.Text style={{ fontStyle: 'bold'}}>
                ${product.price}
              </Card.Text>
              
              <Button variant="primary" onClick={() => send(product)} >Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        })
     
      ))}
    </Row>
  );
}

export default Products;