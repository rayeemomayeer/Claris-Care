import React from 'react';
import { useParams } from 'react-router';

const ServiceDescription = () => {
  const {serviceId} = useParams();
  
  return (
    <div>
      <h1>this is service description {serviceId}</h1>
    </div>
  );
};

export default ServiceDescription;