import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './PageBanner.css';

function PageBanner({ title, content }) {
  return (
    <Container fluid className="homepage">
      <Row className="pt-4 mb-0"> {/* Remove bottom margin */}
        <h1><b>{title}</b></h1>
        <p>{content}</p>
      </Row>
    </Container>
  );
}

export default PageBanner;