import React, { useState } from 'react';
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const InputField = ({ type, placeholder, value, onChange, usefor }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determine the type of input field to display
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <input
        style={{ padding: '10px 40px 10px 10px', fontSize: '1.2em', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        showPassword ? (
          <IoMdEye
            onClick={togglePasswordVisibility}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray', fontSize: '1.5em' }}
          />
        ) : (
          <IoMdEyeOff
            onClick={togglePasswordVisibility}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray', fontSize: '1.5em' }}
          />
        )
      )}
    </div>
  );
};

export default InputField;
