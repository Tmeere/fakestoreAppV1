import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product details!', error);
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={6}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailsPage;