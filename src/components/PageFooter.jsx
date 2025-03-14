import { Container, Row, Col, Button } from "react-bootstrap";

function FooterInformation() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container fluid className="bg-dark text-white py-">
      <Container fluid className="bg-dark text-white py-4">
        <Row>
          <Col md={12} className="text-center">
            <Button variant="secondary" className="w-100 mb-3" onClick={scrollToTop}>
              Back To Top
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a leading online store providing the latest and upcoming
              products. Our mission is to offer the best shopping experience for
              our customers.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@fakestore.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Fake Street, Faketown, FK 12345</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-white">
                Facebook
              </a>
              <br />
              <a href="#" className="text-white">
                Twitter
              </a>
              <br />
              <a href="#" className="text-white">
                Instagram
              </a>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
        </Row>
      </Container>
      <Container fluid className="bg-darker text-white py-1">
        <Row>
          <Col md={4}>
            <h5>Our Services</h5>
            <p>
              We offer a wide range of services to meet your needs, including
              fast shipping, easy returns, and 24/7 customer support. Our goal
              is to provide you with the best shopping experience possible.
            </p>
          </Col>
          <Col md={4}>
            <h5>Latest News</h5>
            <p>
              Stay updated with the latest news and trends in the industry. We
              regularly post updates about new products, special offers, and
              upcoming events. Don't miss out on any important information!
            </p>
          </Col>
          <Col md={4}>
            <h5>Subscribe</h5>
            <p>
              Join our newsletter to receive exclusive offers and updates
              directly in your inbox. Subscribe now and be the first to know
              about our latest products and promotions.
            </p>
            <Button variant="secondary" className="w-100">Subscribe</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2025 FakeStore. All rights reserved. Made By Thomas Meere</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FooterInformation;