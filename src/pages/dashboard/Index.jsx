import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Index.jsx';
import Navbar from '../../components/navbar/Index';

// import BgCarousel from '../../assets/dashboard/background-carousel.jpg';
import CalIcon from '../../assets/dashboard/calender-icon.png';
import ListIcon from '../../assets/dashboard/list-icon.png';

import './Style.css';

export class Index extends Component {
  render() {
    return (
      <div className="container-dashboard">
        <Navbar />
        <Sidebar />

        <main className="dashboard-content">
          <div className="top-content">
            <h2 className="top-title">News</h2>
          </div>

          <div className="bot-content">
            <div className="calender">
              <div className="today">
                <h2>Today, October 16</h2>
                <img src={CalIcon} alt="calender-icon" />
              </div>

              <div className="calender-table">
                <div className="calender-number">
                  <p className="day">Mo</p>
                  <p className="number">12</p>
                </div>
                <div className="calender-number">
                  <p className="day">Tu</p>
                  <p className="number">13</p>
                </div>
                <div className="calender-number">
                  <p className="day">We</p>
                  <p className="number">14</p>
                </div>
                <div className="calender-number">
                  <p className="day">Th</p>
                  <p className="number">15</p>
                </div>
                <div className="calender-number current-day">
                  <p className="day">Fr</p>
                  <p className="number">16</p>
                </div>
                <div className="calender-number">
                  <p className="day">Sa</p>
                  <p className="number">17</p>
                </div>
                <div className="calender-number">
                  <p className="day">Su</p>
                  <p className="number">18</p>
                </div>
              </div>
            </div>

            <div className="schedule">
              <div className="schedule-title">
                <p>
                  All schedule <a href="dashboard-user.html">For you</a>
                </p>
              </div>

              <div className="time">
                <p>8:00</p>
              </div>

              <div className="class">
                <div className="class-1 bg-1">
                  <div className="class-title">
                    <p>Introduction to Banking Finance</p>
                    <img src={ListIcon} alt="list-icon" />
                  </div>

                  <div className="duration">
                    <p>100 minutes</p>
                  </div>
                </div>

                <div className="class-2">
                  <div className="class-title">
                    <p>Trigonometry</p>
                  </div>

                  <div className="duration">
                    <p>50 minutes</p>
                  </div>
                </div>
              </div>

              <div className="time">
                <p>11:00</p>
              </div>

              <div className="class">
                <div className="class-1 bg-2">
                  <div className="class-title">
                    <p>History of Europe</p>
                    <img src={ListIcon} alt="list-icon" />
                  </div>

                  <div className="duration">
                    <p>100 minutes</p>
                  </div>
                </div>

                <div className="class-2 empty-class"></div>
              </div>

              <div className="time">
                <p>13:00</p>
              </div>

              <div className="class">
                <div className="class-1 bg-3">
                  <div className="class-title">
                    <p>Fundamental of Front End Dev.</p>
                    <img src={ListIcon} alt="list-icon" />
                  </div>

                  <div className="duration">
                    <p>50 minutes</p>
                  </div>
                </div>

                <div className="class-2">
                  <div className="class-title">
                    <p>Molecular Biology</p>
                  </div>

                  <div className="duration">
                    <p>50 minutes</p>
                  </div>
                </div>
              </div>

              <div className="time">
                <p>8:00</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
