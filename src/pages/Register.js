import React, { useState } from 'react';
import InputField from '../components/input';
import Button from '../components/Button';

function Register({ onLoginSuccess, onBackToLogin }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    onLoginSuccess();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <InputField
            type="email"
            placeholder="Nhập Email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputField
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
          <InputField
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Button type="submit">Đăng ký</Button>
          </div>
          <div style={{ textAlign: 'center', textDecoration: 'underline' }}>
            <a href='#' onClick={onBackToLogin} style={{fontSize: '15px', color: '#998861'}}>Quay lại đăng nhập</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
