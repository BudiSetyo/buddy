import React, { useState } from 'react';
import Input from '../../components/input/Index';
import Button from '../../components/button/Index';
import { Link } from 'react-router-dom';

import Axios from 'axios';
import swal from '@sweetalert/with-react';

import Icon from '../../assets/google-icon.png';

import './Style.css';

const Index = () => {
  const [userName, setName] = useState('');
  const [errName, setErrName] = useState('');

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState('');

  const registerHanlder = () => {
    if (!userName) {
      setErrName('username cannot be empty');
      return;
    }
    if (!email) {
      setErrEmail('email cannot be empty');
      return;
    }
    if (!password) {
      setErrPassword('password cannot be empty');
      return;
    }
    if (!confirmPassword) {
      setErrConfirmPassword('password cannot be empty');
      return;
    }
    if (password !== confirmPassword) {
      setErrConfirmPassword('password does not match');
      return;
    }

    Axios.post('http://localhost:8000/auth/register', {
      username: userName,
      email: email,
      password: password,
    })
      .then((res) => {
        swal({
          title: 'Success',
          text: 'Go to login',
          icon: 'success',
          button: 'Next',
        }).then(() => {
          window.location = '/';
        });
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
      <h1 className="login-title">Register</h1>

      <Input
        type="text"
        title="Username"
        value={userName}
        handleChange={(e) => {
          setErrName('');
          setName(e.target.value);
        }}
      />
      <p> {errName} </p>

      <Input
        type="text"
        title="Email"
        value={email}
        handleChange={(e) => {
          setErrEmail('');
          setEmail(e.target.value);
        }}
      />
      <p> {errEmail} </p>

      <Input
        type="password"
        title="Password"
        value={password}
        handleChange={(e) => {
          setErrPassword('');
          setPassword(e.target.value);
        }}
      />
      <p> {errPassword} </p>

      <Input
        type="password"
        title="Confirm Password"
        value={confirmPassword}
        handleChange={(e) => {
          setErrConfirmPassword('');
          setConfirmPassword(e.target.value);
        }}
      />
      <p> {errConfirmPassword} </p>

      <Button
        type="btn--primary"
        handleCick={() => {
          registerHanlder();
        }}
      >
        Register
      </Button>
      <Button type="btn--secondary">
        <img src={Icon} style={{ marginRight: '1vw' }} alt="google-icon" />
        Register with Google
      </Button>

      <p className="new-user">
        Already have acount?
        <Link to="/" className="register">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Index;
