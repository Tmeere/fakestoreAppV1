import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductListing.css"; // Import the CSS file

function ProductListing({ title, totalProducts, showButton = true }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setError(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
        setProducts([]);
        setError(true);
      });
  }, []);

  return (
    <Container className="product-listing pt-3 mb-5 mt-3">
      <Row className="mb-4">
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
      {showButton && (
        <Button as={Link} to="/allproducts">
          <b>
            <i>
              Not You? Find all our products <u>Here!</u>
            </i>
          </b>
        </Button>
      )}
      <Row className="py-3">
        {error ? (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="text-danger">Product Not Found</Card.Title>
                <Card.Text className="text-danger">There was an error fetching the products. Please try again later.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          products.slice(0, totalProducts).map((product) => (
            <Col key={product.id} md={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="front"
                  src={product.image}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="text-truncate">
                    ${product.price}
                  </Card.Text>
                  <Button as={Link} to={`/product/${product.id}`} variant="primary">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default ProductListing;