import React from 'react'
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
                <h1 className="login-title">Register</h1>

                <Input type="email" title="Username" />
                <Input type="email" title="Email" />
                <Input type="password" title="Password" />
                <Input type="password" title="Confirm Password" />

                <Button type="btn--primary" >
                    Register
                </Button>
                <Button type="btn--secondary" >
                    <img src={Icon} style={{ marginRight: "1vw" }} alt="google-icon" />
                    Register with Google
                </Button>

                <p className="new-user">
                    Already have acount? 
                    <Link to="/" className="register">
                        Login
                    </Link>
                </p>
            </div>
    )
}

export default Index;
