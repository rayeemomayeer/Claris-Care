import React from 'react';
import { useParams } from 'react-router';

const ServiceDescription = () => {
  const {serviceId} = useParams();
  
  return (
    <div>
      <h1 className="text-center">service {serviceId} description</h1>
    </div>
  );
};

export default ServiceDescription;