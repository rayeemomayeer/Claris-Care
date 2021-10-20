import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDescription = () => {
  const {productId} = useParams();
  const [details, setDetails]=useState({})
  useEffect(() => {
    fetch('/phermecy.json')
      .then(res=>res.json())
      .then(data=>{
    const p=data.find(p=>p.id==productId)
      console.log('this is details',p)

      setDetails(p)
    })
    },[productId])
  return (
    <div>
       <h1 className="text-5xl text-center mb-8 text-green-900 mt-8">Product Details</h1>
    <div className="flex justify-center">
     
      <div className="p-3 border-2 m-3 shadow-sm rounded-lg w-5/12">
      <div className="">
        <img className="rounded-lg" src={details.imageSrc} alt="" />
      </div>
      <div className=" pl-8 pt-5 text-left">
        <h1 className=" text-purple-900">{details.name}</h1>
        <p className="text-gray-700 text-5xl text-right">{details.price}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProductDescription;