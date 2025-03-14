import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductListing from './ProductListing';
import './Products.css'; 
import PageBanner from './PageBanner';

function AllProducts() {
  return (
    <>
        <PageBanner title="ALL PRODUCTS" content="Find our daily new content! This is updated weekly on our page"/>
      <Container fluid className='mb-3'>
        <Row className="mb-4">
          <Col className='Product-Header'>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <ProductListing title="Latest Products" totalProducts={16} showButton={false} />
        </Row>
      </Container>
    </>
  );
}

export default AllProducts;