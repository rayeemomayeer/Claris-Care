import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-green-100">
      <div className="footer-container">
        <div className="footer-left-side">
        <h2 style={{color: 'DarkBlue'}}>Contact us</h2>
        <h5> Call Us</h5>
        <p style={{color: 'SlateGray'}}>+38 90891 394628</p>
        
        <h5> Business hours</h5>
        <p style={{color: 'SlateGray'}}>Mon -fri 8AM - 5PM</p>
        
        <h5> Location</h5>
        <p style={{color: 'SlateGray'}}>Franklin st, Greenpoint ave</p>
        
      </div>
      <div className="footer-right-side">
        <h2 style={{color: 'DarkBlue'}}>Quick links</h2>
        <Link style={{textDecoration: 'none',color: 'DodgerBlue'}} to="/home">Home</Link><br/><br/>
        <Link style={{textDecoration: 'none',color: 'DodgerBlue'}} to="/services">Services</Link><br/><br/>
        <Link style={{textDecoration: 'none',color: 'DodgerBlue'}} to="/doctors">Doctors</Link><br/><br/>
        <Link style={{textDecoration: 'none',color: 'DodgerBlue'}} to="/phermecy">Phermecy</Link><br/><br/>
      </div>
      </div>
      <p style={{textAlign: 'center'}}>&copy; Copyrights 2021 Claris Care All rights reserved</p>
    </footer>
  );
};

export default Footer;