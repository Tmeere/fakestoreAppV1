import React from 'react';
import PageBanner from './PageBanner';
import { Container } from 'react-bootstrap';
import ProductTool from './ProductTool';

function productListingModify() {
  return (
    <>
      <PageBanner title="MODIFY PRODUCT" content="Modify the product details here!" />
      <ProductTool/>
       
    </>
  );
}

export default productListingModify;