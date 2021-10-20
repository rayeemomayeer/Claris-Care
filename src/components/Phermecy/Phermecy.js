import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Phermecy = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    fetch('/phermecy.json')
      .then(result=>result.json())
      .then(data=> setProducts(data))
  }, []);
  return (
    <div>
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl text-center mb-8 text-green-900 ">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Phermecy;