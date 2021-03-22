import React, {Component} from 'react';
import './Style.css';

import ProfileView from '../../assets/profile/profile-icon-view.png';
import EditIcon from '../../assets/profile/edit-icon.png';
import PhoneIcon from '../../assets/profile/phone-icon.png';
import PinIcon from '../../assets/profile/pin-icon.png';
import ChatsIcon from '../../assets/profile/chats-icon.png';
import NotifIcon from '../../assets/profile/notif-icon-cont.png';
import SecurityIcon from '../../assets/profile/security-icon.png';
import StorageIcon from '../../assets/profile/storage-icon.png';
import InsideIcon from '../../assets/profile/inside-icon.png';


import SideBar from '../../components/sidebar/Index';
import Navbar from '../../components/navbar/Index';

export class Index extends Component {

    render() {
        return (
            <div className="container-profile">
                <Navbar />

                <SideBar />

                <section className="content">
                    <div className="profile-view">
                        <div className="shadow">
                            <img className="user-icon" src={ProfileView} alt="profile-icon"/>
                            <img className="edit-icon" src={EditIcon} alt="edit-icon"/>
                            <h2>Emir Kharisma</h2>
                        </div>
                    </div>

                    <div className="option-profile">
                        <div className="option-title">
                            <h2>Profile Settings</h2>
                        </div>

                        <div className="option-menu">
                            <div className="menu-value">
                                <img src={PhoneIcon} alt="phone-icon"/>
                                <p>Phone Numbers</p>
                                <img src={InsideIcon} alt="inside-icon"/>
                            </div>
                        </div>

                        
                        <div className="option-menu">
                            <div className="menu-value">
                                <img src={PinIcon} alt="phone-icon"/>
                                <p>Change Password</p>
                                <img src={InsideIcon} alt="inside-icon"/>
                            </div>
                        </div>

                        <div className="option-menu">
                            <div className="menu-value">
                                <img src={ChatsIcon} alt="phone-icon"/>
                                <p>Chats Settings</p>
                                <img src={InsideIcon} alt="inside-icon"/>
                            </div>
                        </div>

                        <div className="option-menu">
                            <div className="menu-value">
                                <img src={NotifIcon} alt="phone-icon"/>
                                <p>Push Notification</p>
                                <img src={InsideIcon} alt="inside-icon"/>
                            </div>
                        </div>

                        <div className="option-menu">
                            <div className="menu-value">
                                <img src={SecurityIcon} alt="phone-icon"/>
                                <p>Privacy and Security</p>
                                <img src={InsideIcon} alt="inside-icon"/>
                            </div>
                        </div>

                        <div className="option-menu storage-menu">
                            <div className="menu-value">
                                <img src={StorageIcon} alt="phone-icon"/>
                                <p>Data and Storage</p>
                                <img src={InsideIcon} alt="inside-icon"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Index
