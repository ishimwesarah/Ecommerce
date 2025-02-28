// Navbar.jsx
import React, { useState } from 'react';
import '../Dashboard/dashboard-styles/DashNav.css';
import { FaMoon, FaSun, FaBell, FaCog, FaClock, FaSearch } from 'react-icons/fa'; // React Icons Library
import image1 from '../assets/sar.jpg';

const DashNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Add/remove class from body
  };

  return (
    <div className={`navbars ${isDarkMode ? 'dark' : ''}`}>
      <div className="navbar-left">
        <span className="welcome-text">WELCOME!</span>
      </div>

      <div className="navbar-right">
        {/* Theme toggle button */}
      <a href='/notifi'>  <button onClick={toggleDarkMode} className="theme-toggle-btn">
          {isDarkMode ? <FaSun className="navbar-icon" /> : <FaMoon className="navbar-icon" />}
        </button></a>

        <div className="notification-icon-container">
          <FaBell className="navbar-icon" />
          <span className="notification-badge">3</span>
        </div>
        <FaCog className="navbar-icon" />
        <FaClock className="navbar-icon" />

        <img src={image1} alt="Profile" className="profile-image" /> {/* Replace with your profile image path */}

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
