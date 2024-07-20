// src/Options.js
import React, { useState } from 'react';
import InputField from '../components/input';
import Button from '../components/Button';
import SwitchField from '../components/Switch';

function Options() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Options logic here
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%'}}>
      <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
          <SwitchField type="text" placeholder="Ngôn ngữ an toàn cho trẻ em"/>
          <SwitchField type="text" placeholder="Hình ảnh an toàn cho trẻ em"/>
          <SwitchField type="text" placeholder="Hỗ trợ học tập cho trẻ em"/>
        </div>
      </form>
    </div>
  );
}

export default Options;
