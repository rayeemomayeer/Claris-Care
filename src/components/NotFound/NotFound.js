import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mx-auto">
      <img className="mx-auto" src="https://image.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg" alt="" />
      <Link to="/home"><button classNamne="btn btn-warning">back to home</button></Link>
    </div>
  );
};

export default NotFound;