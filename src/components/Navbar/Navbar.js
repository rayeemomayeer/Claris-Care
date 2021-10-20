import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const {user, logOut} = useAuth(); 
  return (
    <nav className="p-2 align-center navbar" style={{backgroundColor: '#00E1CE'}}>
      <h1 className="text-green-900 sm:text-lg md:text-4xl font-bold">Claris Care</h1>
      <div className="navbar-links">
        <NavLink activeStyle={{fontWeight: "bold"}} className="px-2 text-2xl font-medium no-underline text-white" to="/home">Home</NavLink>
        <NavLink activeStyle={{fontWeight: "bold"}}  className="px-2 text-2xl font-medium no-underline text-white" to="/services">Services</NavLink>
        <NavLink activeStyle={{fontWeight: "bold"}}  className="px-2 text-2xl font-medium no-underline text-white" to="/doctors">Doctors</NavLink>
        <NavLink activeStyle={{fontWeight: "bold"}}  className="px-2 text-2xl font-medium no-underline text-white" to="/phermecy">Phermecy</NavLink>
        <NavLink activeStyle={{fontWeight: "bold"}}  className="px-2 text-2xl font-medium no-underline text-white" to="/blogs">Blogs</NavLink>
      </div>
      <div className="flex align-middle">
        <h5 className="text-gray-700 my-auto">{user?.displayName}</h5>
        <img className="w-12 h-12 ml-3 rounded-3xl" src={user?.photoURL?user.photoURL:'https://i1.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1'} alt="" />
        {
          user?.email?
            <button className="no-underline font-medium text-xl rounded-3xl bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mx-2 my-auto" onClick={logOut}>Logout</button>:
            <NavLink className="no-underline font-medium text-xl rounded-3xl bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 mx-2" to="/login">Login</NavLink>
        }
      </div>
    </nav>
  );
};

export default Navbar;