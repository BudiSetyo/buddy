import React from 'react'
import Input from '../../components/input/Index';
import Button from '../../components/button/Index';

import {
    Link,
} from 'react-router-dom';

import Logo from '../../assets/logo-icon-2.png';

import './Style.css';

const Index = () => {
    return (
        <div className="container-reset">
                <div className="left-side">
                    <img className="logo-icon" src={Logo} alt="logo-icon" />
                </div>

                <div className="right-side">
                    <div class="text">
                        <h2 className="reset-title">Create New Password</h2>
                        <p className="par-2">Your new password must be different from previous used password!</p>
                    </div>

                    <div className="input-reset">
                        <Input type="password" title="Password" />
                        <Input type="password" title="Create Password" />
                    </div>

                    <div className="buttons">
                        <Link className="next-link" to="/resetPassword4">
                            <Button type="btn--primary">
                                Create
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Index
