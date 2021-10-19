import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch('services.json')
      .then(result=>result.json())
      .then(data=> setServices(data))
  }, []);
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-5xl text-center mb-8 text-green-900">Our Services</h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          services.map(service=> <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;