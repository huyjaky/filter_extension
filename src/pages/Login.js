import React, { useState } from 'react';
import InputField from '../components/input';
import Button from '../components/Button';
import SwitchField from '../components/Switch';

function Login({ onLoginSuccess }) {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    // Notify parent component that login was successful
    onLoginSuccess();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <InputField
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
          <SwitchField type="text" placeholder="Ngôn ngữ an toàn cho trẻ em" />
          <div style={{ textAlign: 'center' }}>
            <Button type="submit">Đăng nhập</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
