import React from 'react';
import Input from '../../components/input/Index';
import Button from '../../components/button/Index';
import {
    Link,
} from 'react-router-dom';

import Icon from '../../assets/google-icon.png';

import './Style.css'

const Index = () => {
    return (
            <div className="container-login">
                <h1 className="login-title">Login</h1>

                <div className="form-input">
                    <Input type="email" title="Username or Email" />
                    <Input type="password" title="Password" />
                    <Link to="/resetPassword" className="forgot-password">
                        Forgot Password
                    </Link>
                </div>

                <div className="block-button">
                    <Button type="btn--primary" >
                        Login
                    </Button>
                    <Button type="btn--secondary" >
                        <img src={Icon} style={{ marginRight: "1vw" }} alt="google-icon" />
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
        
    )
}

export default Index;
