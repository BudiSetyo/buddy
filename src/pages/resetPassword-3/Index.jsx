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
        </Router>
    )
}

export default Index
