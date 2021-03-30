import React, { useState } from 'react';
import Input from '../../components/input/Index';
import Button from '../../components/button/Index';
import { Link } from 'react-router-dom';

import Axios from 'axios';

import Icon from '../../assets/google-icon.png';
import swal from '@sweetalert/with-react';

import './Style.css';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    Axios.post('http://localhost:8000/auth/login', {
      username: username,
      password: password,
    })
      .then((res) => {
        localStorage.setItem('username', res.data.result.username);
        localStorage.setItem('password', res.data.result.password);
        localStorage.setItem('email', res.data.result.email);
        localStorage.setItem('role', res.data.result.role);
        localStorage.setItem('id', res.data.result.id);

        window.location = '/dashboard';
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: 'error',
          button: 'Back',
        });
      });
  };

  return (
    <div className="container-login">
      <h1 className="login-title">Login</h1>

      <div className="form-input">
        <Input
          type="text"
          title="Username or Email"
          value={username}
          handleChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="password"
          title="Password"
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to="/resetPassword" className="forgot-password">
          Forgot Password
        </Link>
      </div>

      <div className="block-button">
        <Button
          type="btn--primary"
          handleCick={() => {
            loginHandler();
          }}
        >
          Login
        </Button>
        <Button type="btn--secondary">
          <img src={Icon} style={{ marginRight: '1vw' }} alt="google-icon" />
          Login with Google
        </Button>
      </div>

      <p className="new-user">
        New User?
        <Link to="/register" className="register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Index;
