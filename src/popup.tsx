import React, { useState } from 'react';
import { sendToBackground } from "@plasmohq/messaging";

import "~style.css";
import LoginPage from "./pages/Login";
import Header from "./components/Header";
import Options from "./pages/Options";
import ResultPage from "./pages/Result"

function IndexPopup() {
  const [showOptions, setShowOptions] = useState(false);

  const handleLoginSuccess = () => {
    setShowOptions(true);
  };

  return (
    <div style={{ height: '150px', width: '350px', backgroundColor: '#f0f0f0' }}>
      <div style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}>
        <Header />
      </div>
      <div style={{ padding: '30px', backgroundColor: '#f0f0f0' }}>
        {!showOptions ? (
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Options />
        )}
      </div>
    </div>
    // <div>
    //   <ResultPage />
    // </div>
  );
}

export default IndexPopup;
