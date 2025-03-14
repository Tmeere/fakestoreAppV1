import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import RemoveProduct from "./RemoveProduct";
import './ProductTool.css';

function ProductTool() {
    return (
        <>
            <Container className="product-tool py-2 my-4">
                <h1 className="text-center pb-3"><i>MODIFY PRODUCT TOOL</i></h1>
                <p><i>Add, Edit and remove products as needed</i></p>
                <Row>
                    <Col md={4} className="product-section">
                        <AddProduct />
                    </Col>
                    <Col md={4} className="product-section">
                        <EditProduct />
                    </Col>
                    <Col md={4} className="product-section">
                        <RemoveProduct />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductTool;