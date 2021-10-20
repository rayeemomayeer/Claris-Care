import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {signInUsingGoogle,handleRegistration,handleEmailChange,handlePasswordChange,error,tooggleLogin,isLogin,handleResetPassword,handleNameChange} = useAuth();
  return (
    <div className="text-center">
      <form onSubmit={handleRegistration} autoComplete="off">
        <h1 className="text-5xl text-center mb-8 text-green-900 mt-8">{isLogin? 'Sign In' : 'Sign Up'}</h1>
        
        {!isLogin && <div><label htmlFor="email" className="text-3xl text-indigo-700">Name</label><br /><input required onBlur={handleNameChange} className="border-2 border-gray-400 rounded p-2 sm:w-full md:w-5/12" placeholder="jhon smith" type="name" /><br/><br/></div>}

        <label htmlFor="email" className="text-3xl text-indigo-700">Email</label><br />
        <input required onBlur={handleEmailChange} className="border-2 border-gray-400 rounded p-2 sm:w-full md:w-5/12" placeholder="jhon@gmail.com" type="email" /><br/><br/>

        <label htmlFor="email" className="text-3xl text-indigo-700">Password</label><br />
        <input required onBlur={handlePasswordChange} className="border-2 border-gray-400 rounded p-2 sm:w-full md:w-5/12" type="password" placeholder="zHi*71iD"/><br/><br />

        <div><p className="text-red-500">{error}</p></div>
        <div>
          <input onChange={tooggleLogin} type="checkbox" className="form-check-input" id="gridCheck1" />
          <label htmlFor="gridCheck1" className="form-check-label ps-2"> Already Registered ?</label>
        </div><br />
        <input type="submit" className="btn btn-primary" value={isLogin? 'Sign In' : 'Sign Up'} />
        <button onClick={handleResetPassword}  type="button" className="btn btn-secondary ms-3">reset password</button>
      </form>
        <br/><br/>
        <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
    </div>
  );
};

export default Login;