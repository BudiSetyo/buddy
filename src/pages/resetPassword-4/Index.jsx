import React from 'react'
import Input from '../../components/input/Index';
import Button from '../../components/button/Index';

import {
    Link,
} from 'react-router-dom';

import Logo from '../../assets/logo-icon-2.png';
import Success from '../../assets/success-icon.png';

import './Style.css';

const Index = () => {
    return (
        <div className="container-reset">
                <div className="left-side">
                    <img className="logo-icon" src={Logo} alt="logo-icon" />
                </div>

                <div className="right-side">
                    <div className="modal-box">
                        <h2 className="modal-title">
                            Password changed!
                        </h2>

                        <img className="success-icon" src={Success} alt="succes-icon"/>

                        <Link to="/" className="login-link">
                            Login to your account
                        </Link>
                    </div>
                    <div class="text">
                        <h2 className="reset-title">Create New Password</h2>
                        <p className="par-2">Your new password must be different from previous used password!</p>
                    </div>

                    <div className="input-reset">
                        <Input type="password" title="Password" />
                        <Input type="password" title="Create Password" />
                    </div>

                    <div className="buttons">
                        <Button type="btn--primary">
                            Create
                        </Button>
                    </div>
                </div>
            </div>
    )
}

export default Index
