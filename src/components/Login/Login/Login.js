import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {signInUsingGoogle,handleRegistration,handleEmailChange,handlePasswordChange,error,tooggleLogin,isLogin,handleResetPassword} = useAuth();
  return (
    <div className="text-center">
      <form onSubmit={handleRegistration} autoComplete="on">
        <h1>Please {isLogin? 'Login' : 'Register'}</h1>
        <label htmlFor="email">Email</label><br />
        <input required onBlur={handleEmailChange} className="border-2 border-gray-400 rounded p-2 w-5/12" placeholder="jhon@gmail.com" type="email" /><br/><br/>
        <label htmlFor="email">password</label><br />
        <input required onBlur={handlePasswordChange} className="border-2 border-gray-400 rounded p-2 w-5/12" type="password" placeholder="zHi*71iD"/><br/><br />
        <div><p className="text-red-500">{error}</p></div><br/>
        <div>
          <input onChange={tooggleLogin} type="checkbox" className="form-check-input" id="gridCheck1" />
          <label htmlFor="gridCheck1" className="form-check-label ps-2"> Already Registered ?</label>
        </div><br />
        <input type="submit" className="btn btn-primary" value={isLogin? 'Login' : 'Register'} />
        <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm ms-3">reseat password</button>
      </form>
        <br/><br/>
      <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
    </div>
  );
};

export default Login;