import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { SiPaypal, SiGooglepay, SiApplepay, SiVisa } from "react-icons/si";
import "../style/Footer.css";
import image1 from '../assets/pay.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h3>Stay up to date</h3>
          <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>SUBMIT</button>
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <div className="column">
            <h4>SHOP</h4>
            <ul>
              <li>Body Lotion</li>
              <li>Computer Gadget</li>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>General</li>
              <li>Shoes</li>
              <li>Sports</li>
              <li>Watch</li>
              <li>Woman Clothes</li>
            </ul>
          </div>
          <div className="column">
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="column">
            <h4>ABOUT</h4>
            <ul>
              <li>Who We Are</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="contact-info">
          <h3>Happy to help</h3>
          <p>1279 Thorn Street, NY</p>
          <p>Phone: 307-549-2480</p>
          <p>Mail: demo@gmail.com</p>
          <div className="social-icons">
            <FaFacebookF /> <FaTimes /> <FaLinkedinIn /> <FaInstagram />
          </div>
        </div>
        <div className="payment-options">
       <div><h4>ACCEPT FOR</h4></div>
          <div className="payment-icons">
            <img src={image1}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
