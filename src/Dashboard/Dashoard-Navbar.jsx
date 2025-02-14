// Navbar.jsx
import React from 'react';
import '../Dashboard/dashboard-styles/DashNav.css'
import { FaMoon, FaBell, FaCog, FaClock, FaSearch } from 'react-icons/fa'; //React Icons Library
import image1 from '../assets/sar.jpg'

const DashNavbar = () => {
  return (
    <div className="navbars">
      <div className="navbar-left">
        <span className="welcome-text">WELCOME!</span>
      </div>

      <div className="navbar-right">
        <FaMoon className="navbar-icon" />
        <div className="notification-icon-container">
          <FaBell className="navbar-icon" />
          <span className="notification-badge">3</span>
        </div>
        <FaCog className="navbar-icon" />
        <FaClock className="navbar-icon" />

        <img src={image1} alt="Profile" className="profile-image" />  {/* Replace with your profile image path */}

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;