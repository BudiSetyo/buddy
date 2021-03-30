import ProfileImg from '../../assets/sidebar/profile-icon.svg';
import NotifImg from '../../assets/sidebar/notif-icon.svg';
import BoardImg from '../../assets/sidebar/dashboard-icon.svg';
import ActImg from '../../assets/sidebar/activity-icon.svg';
import SetImg from '../../assets/sidebar/setting-icon.svg';
import HelpImg from '../../assets/sidebar/help-icon.svg';
import OutImg from '../../assets/sidebar/logout-icon.svg';
import { withRouter } from 'react-router-dom';

import './Style.css';

import React, { Component } from 'react';

export class Index extends Component {
  handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('password');
    localStorage.removeItem('id');

    window.location = '/';
  };

  render() {
    return (
      <>
        <aside className="sidebar">
          <div className="menu-profile">
            <div className="notification">
              <img src={NotifImg} alt="notif-icon" />
            </div>
            <div className="desc">
              <img src={ProfileImg} alt="profile-icon" />
              <h5>Emir Kharisma</h5>
              <p>online</p>
            </div>
          </div>

          <div className="menu-dashboard menu-nav">
            <img src={BoardImg} alt="dashboard-icon" />
            <p>Dashboard</p>
          </div>

          <div className="menu-activity menu-nav">
            <img src={ActImg} alt="activity-icon" />
            <p>Activity</p>
          </div>

          <div className="menu-setting menu-nav">
            <img src={SetImg} alt="setting-icon" />
            <p>Settings</p>
          </div>

          <div className="menu-help menu-nav">
            <img src={HelpImg} alt="help-icon" />
            <p>Help</p>
          </div>

          <div
            onClick={() => {
              this.handleLogout();
            }}
            className="menu-logout menu-nav"
          >
            <img src={OutImg} alt="logout-icon" />
            <p className="logout">Logout</p>
          </div>
        </aside>
      </>
    );
  }
}

export default withRouter(Index);
