import React from 'react'
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
                        <h2 className="reset-title">Reset Password</h2>
                        <p className="par-1">Enter verification code we just sent to your email address</p>
                    </div>

                    <div className="otp">
                        <input className="otp-input" type="text" maxLength="1" />
                        <input className="otp-input" type="text" maxLength="1" />
                        <input className="otp-input" type="text" maxLength="1" />
                        <input className="otp-input" type="text" maxLength="1" />
                    </div>

                    <p className="resend" >Didn’t receive a code? <Link className="resend-link" >Resend</Link> </p>

                    <div className="buttons">
                        <Link className="next-link" to="/resetPassword3">
                            <Button type="btn--primary">
                                Verify
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Index;

