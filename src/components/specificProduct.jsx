import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageBanner from "./PageBanner";
import "./specificProduct.css"; 

function SpecificProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setError(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the product!", error);
        setProduct(null);
        setError(true);
      });
  }, [id]);

  return (
    <>
      <PageBanner title="PRODUCT DETAILS" />
      <Container className="product-information">
        {error ? (
          <Row className="py-3 my-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="text-danger">Product Not Found</Card.Title>
                  <Card.Text className="text-danger">There was an error fetching the product. Please try again later.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : product ? (
          <Row className="py-3 my-3">
            <Col md={4}>
              <Card>
                <Card.Img variant="front" src={product.image} className="product-image" />
              </Card>
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text><b>Price:</b> ${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Shipping and Delivery</Card.Title>
                  <Card.Text>Estimated delivery time: 3-5 business days.</Card.Text>
                  <Card.Text>Shipping cost: $5.99</Card.Text>
                  <p><u>Information On Shipping</u></p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row className="py-3 my-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Loading...</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default SpecificProduct;