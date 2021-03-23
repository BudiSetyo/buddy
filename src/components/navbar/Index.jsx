import React, { Component } from 'react';

import Burger from '../../assets/navbar/burger-icon.png';
import Chat from '../../assets/navbar/chat-icon.png';

import './Style.css';

export class Index extends Component {
    render() {
        return (
            <>
                <nav className="navbar-item">
                    <img className="burger-icon" src={Burger} alt="borger-icon"/>
                    <img className="chat-icon" src={Chat} alt="chat-icon"/>
                </nav>
            </>
        )
    }
}

export default Index;
