import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Teachers = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(()=>{
    fetch('doctors.json')
      .then(response => response.json())
      .then(data => setDoctors(data))
  },[])
  return (
    <div className="text-center">
      <h1 className="text-5xl text-center mb-8 text-green-900 mt-8">Our Doctors</h1>
      <div className="teachers-container">
              {
                doctors.map(cls => <Doctor key={cls.id} cls={cls}></Doctor>)
              }
      </div>
    </div>
  );
};

export default Teachers;