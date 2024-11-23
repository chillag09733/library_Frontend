import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Book(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.product.author}</Card.Subtitle>
        <Card.Text>
        {props.product.category}
        </Card.Text>
        <Button variant="primary">Buy me!</Button>
      </Card.Body>
    </Card>
  );
}

export default Book