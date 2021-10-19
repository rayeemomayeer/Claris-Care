import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const {user, logOut} = useAuth(); 
  return (
    <nav className="md:flex justify-around p-2 align-center" style={{backgroundColor: '#00E1CE'}}>
      <h1 className="text-white sm:text-lg md:text-4xl font-bold">Claris Care</h1>
      <div className="">
        <NavLink className="px-2 text-2xl font-medium no-underline text-white" to="/home">Home</NavLink>
        <NavLink className="px-2 text-2xl font-medium no-underline text-white" to="/services">Services</NavLink>
        <NavLink className="px-2 text-2xl font-medium no-underline text-white" to="/doctors">Doctors</NavLink>
        <NavLink className="px-2 text-2xl font-medium no-underline text-white" to="/phermecy">Phermecy</NavLink>
        {
          user?.email?
            <button className="no-underline font-medium text-xl rounded-3xl bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mx-2" onClick={logOut}>Logout</button>:
            <NavLink className="no-underline font-medium text-xl rounded-3xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-2" to="/login">Login</NavLink>
        }<p className="text-gray-700">Signed in as: {user?.displayName}</p>
      </div>
    </nav>
  );
};

export default Navbar;