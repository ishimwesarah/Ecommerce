import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import Login from './Login'; // Import the Login component

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control popup

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Top Navbar */}
      <div className="navbar-top">
     
        <h1 className="logo">Botiga</h1>
        <Link to='/submitform'>view</Link>
       
        {/* Search & Categories */}
        <div className="search-container">
          <select className="category-dropdown">
            <option>All Categories</option>
            <option>women lotion</option>
            <option>Computer</option>
            <option>Watches</option>
          </select>
          <div className="search-box">
            <input type="text" placeholder="Search products..." />
            <FiSearch className="search-icon" />
          </div>
        </div>

        {/* Icons */}
        <div className="icons-container">
          <FiUser className="icon" onClick={handleLoginClick} style={{cursor: 'pointer'}} /> {/* Open popup on click */}
          <div className="icon-container">
            <FiShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-container">
            <FiHeart className="icon" />
            <span className="badge">0</span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="navbar-bottom">
        <select className="trending-btn">
          <option>Trending Categories ▼</option>
          <option>Body lotion</option>
          <option>Electronics</option>
          <option>Women Clothes</option>
          <option>Electronics</option>
        </select>

        <div className="nav-links">
          <a href="/Home">Home</a>
          <a href="/shop">Shop</a>
          <a href="/Vendor">Vendors</a>
          <a href="/Blog">Blog</a>
          <a href="/Contact">Contact</a>
        </div>
        <div className="contact">
          <FiPhone />
          <span>800-123-4567</span>
        </div>
      </div>

      <Login isOpen={isLoginOpen} onClose={handleLoginClose} /> {/* Render the Login popup */}
    </nav>
  );
};

export default Navbar;