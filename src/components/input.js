// src/InputField.js
import React from 'react';
import { IoMdEyeOff } from "react-icons/io";

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <div style={{position: 'relative', marginBottom: '20px'}}>
      <input
        style={{padding: '10px 40px 10px 10px', fontSize: '1.2em', border: '1px solid #ccc', borderRadius: '5px', width: '100%'}}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <IoMdEyeOff style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray', fontSize: '1.5em'}} />
    </div>
  );
};

export default InputField;
