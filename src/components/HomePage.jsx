import { Container } from "react-bootstrap";
import ProductListing from "./ProductListing";
import "./HomePage.css";
import PageBanner from "./PageBanner";

function HomePage() {
  return (
    <>
      <PageBanner title="STORE CONTENT" content="Welcome to the store find all the latest content here!" />
      <div className="background-image"></div>
      <Container>
        <ProductListing title="Recommended For You" totalProducts={4} />
        <ProductListing title="Best Sellers" totalProducts={4} />
      </Container>
    </>
  );
}

export default HomePage;