import React, { useState } from 'react';
import '../style/Registration.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Login from './Login'; // Import the Login component

const Registration = ({isOpen, onClose}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control the login popup

  const handleRegistration = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };
  

  return (
    <div className="registration-container">
      <div className="registration-card">
      <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="registration-header">
          <h1>Botiga</h1>
          <h2 className="registration-title">Create an account</h2>
        </div>
        <form className="registration-form" onSubmit={handleRegistration}>
          <input
            type="text"
            className="registration-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="registration-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="registration-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="registration-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="registration-button">
            Register
          </button>
        </form>
        <div className="social-registration">
          <button className="google-registration">
            <FcGoogle /> Sign up with Google
          </button>
          <button className="apple-registration">
            <FaGithub /> Sign up with Git hub
          </button>
        </div>
        <div className="registration-options">
          <span>Already have an account?</span>
          <button  className="login-link" onClick={openLogin}>
            Login
          </button>
        </div>
      </div>
       <Login isOpen={isLoginOpen} onClose={closeLogin} /> {/* Render the Login component conditionally */}
    </div>
  );
};

export default Registration;

