import React from 'react'
import Input from '../../components/input/Index';
import Button from '../../components/button/Index';

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

import Logo from '../../assets/logo-icon.png';
import Back from '../../assets/back-icon.png';

import './Style.css';

const Index = () => {
    return (
        <Router>
            <div className="container-reset">
                <div className="left-side">
                    <Link to="">
                        <img className="back-icon" src={Back} />
                    </Link>
                    <img className="logo-icon" src={Logo} />
                </div>

                <div className="right-side">
                    <div class="text">
                        <h2 className="reset-title">Reset Password</h2>
                        <p className="par-1">Enter your email address linked to this account.</p>
                        <p className="par-2">We will send you the verification code to reset your password</p>
                    </div>

                    <div className="buttons">
                        <Input type="email" title="Email" />
                        <Button type="btn--primary">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Index;
