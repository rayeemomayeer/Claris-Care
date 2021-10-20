import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDescription = () => {
  const {serviceId} = useParams();
  const [details, setDetails]=useState({})
  useEffect(() => {
    fetch('/services.json')
      .then(res=>res.json())
      .then(data=>{
    const p=data.find(p=>p.id==serviceId)
      console.log('this is details',p)

      setDetails(p)
    })
    },[serviceId])

  return (
    <div>
      <h1 className="text-5xl text-center mb-8 text-green-900 mt-8">Service Details</h1>
      <div className="md:flex p-3 border-2 m-3 shadow-sm rounded-lg">
      <div className="md:w-4/12">
        <img className="rounded-lg" src={details.serviceImg} alt="" />
      </div>
      <div className="md:w-6/12 pl-8 sm:pt-5 md:pt-0 text-left">
        <h1 className=" text-pink-800">{details.serviceName}</h1>
        <p className="text-gray-700 text-2xl">{details.description}</p>
      </div>
    </div>
    </div>
  );
};

export default ServiceDescription;