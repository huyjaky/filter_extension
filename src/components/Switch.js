import React from 'react';
import { IoMdEyeOff } from "react-icons/io";
import "../components/style/Switch.css";

const SwitchField = ({ type, placeholder, value, onChange, onClick }) => {
  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <input
        style={{ padding: '10px 40px 10px 10px', fontSize: '1.2em', border: '1px solid #ccc', borderRadius: '5px', width: '100%', backgroundColor: '#FFFFFF' }}
        type={type}
        placeholder={placeholder}
        disabled
      />
      <div className="switch-container" onClick={onClick}>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default SwitchField;