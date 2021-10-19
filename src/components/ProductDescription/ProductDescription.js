import React from 'react';
import { useParams } from 'react-router';

const ProductDescription = () => {
  const {productId} = useParams();
  return (
    <div>
      <h1 className="text-center">Product {productId} Description</h1>
    </div>
  );
};

export default ProductDescription;