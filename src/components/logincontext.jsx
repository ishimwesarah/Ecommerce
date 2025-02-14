import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration'; // Import the Registration component

const ParentComponent = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const openRegistration = () => {
    setIsRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div>
      <button onClick={openLogin}>Open Login</button>

      <Login
        isOpen={isLoginOpen}
        onClose={closeLogin}
        onOpenRegistration={openRegistration} // Pass the openRegistration function
      />

      <Registration
        isOpen={isRegistrationOpen}
        onClose={closeRegistration}
      />
    </div>
  );
};

export default ParentComponent;