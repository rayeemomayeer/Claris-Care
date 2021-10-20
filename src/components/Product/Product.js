import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {id,name,price,imageSrc} = props.product;
  return (
    <div className="shadow-sm rounded-lg p-3">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={imageSrc}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
              <div className="">
                <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
                <Link to={`/phermacy/${id}`}><button className="btn btn-success">details</button></Link>
              </div>
    </div>
  );
};

export default Product;