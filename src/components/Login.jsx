import React, { useState } from 'react';
import '../style/Login.css';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = ({ isOpen, onClose }) => {  // Added props: isOpen and onClose
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const Login = ({ isOpen, onClose }) => {
    const { openRegistration } = useContext(LoginContext);}

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  if (!isOpen) return null;  // Don't render if not open

  return (
    <div className="login-container">
      <div className="login-card">
        <button className="close-button" onClick={onClose}>
          X
        </button> {/* Add a close button */}
        <div className="login-header">
          <h1>Botiga<br/><br/><br/></h1>
          <h2 className="login-title">Welcome back!</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /> <br/>
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> <br/>
          <button type="submit" className="login-button">
            Login
          </button>

          <div className="social-login">
            <button className="google-login">
              <FcGoogle />
               </button>
            <button className="github-login">
              <FaGithub />
               </button>
          </div>

          <div className="login-options">
            <div className="remember-me">
              <input
                type="checkbox"
                className="remember-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="remember-label">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </form>

        <div className="login-options">
          <span>Don't have an account?</span>
          <a href="/register" className="sign-up-link">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;