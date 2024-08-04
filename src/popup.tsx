import React, { useState } from 'react';
import { sendToBackground } from "@plasmohq/messaging";

import "~style.css";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Header from "./components/Header";
import Options from "./pages/Options";

function IndexPopup() {
  const [page, setPage] = useState('login'); // 'login', 'register', or 'options'

  const handleLoginSuccess = () => {
    setPage('options');
  };

  const handleRegisterClick = () => {
    setPage('register');
  };

  const handleBackToLogin = () => {
    setPage('login');
  };

  return (
    <div style={{ height: '150px', width: '350px', backgroundColor: '#f0f0f0' }}>
      <div style={{ borderBottom: '2px solid #C1BBAE' }}>
        <Header />
      </div>
      <div style={{ padding: '30px', backgroundColor: '#f0f0f0', backgroundImage: 'linear-gradient(to top, #FFE4A4, #FEF8E8)' }}>
        {page === 'login' && (
          <LoginPage 
            onLoginSuccess={handleLoginSuccess} 
            onRegisterClick={handleRegisterClick} // Pass handler to LoginPage
          />
        )}
        {page === 'register' && (
          <RegisterPage 
            onLoginSuccess={handleLoginSuccess} 
            onBackToLogin={handleBackToLogin} // Pass handler to RegisterPage
          />
        )}
        {page === 'options' && <Options />}
      </div>
    </div>
  );
}

export default IndexPopup;
