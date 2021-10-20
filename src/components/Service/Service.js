import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const {id, serviceName,serviceImg,description} = props.service;
  return (
    <div className="hover:shadow-lg rounded-lg p-2">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
                <img
                  src={serviceImg}
                  alt="service image"
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{description.slice(0,60)}...</h3>
              <div className="flex justify-between align-middle">
                <h3 className=" text-lg font-medium text-gray-900">{serviceName}</h3>
                <Link to={`/service/${id}`}><button className="text-blue-700">read more</button></Link>
              </div>
              
    </div>
  );
};

export default Service;