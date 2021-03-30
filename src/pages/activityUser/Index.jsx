import React, { Component } from 'react';

import Navbar from '../../components/navbar/Index';
import Sidebar from '../../components/sidebar/Index';

import './Style.css';

export class Index extends Component {
  state = {
    headerMyClass: [
      {
        id: 1,
        firstHeader: 'Class Name',
        secondHeader: 'Category',
        thirdHeader: 'Description',
        fourthHeader: 'Progress',
        fifthHeader: 'Status',
        sixthHeader: 'Score',
      },
    ],
    myClass: [
      {
        id: 1,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        progress: '80',
        status: 'Ongoing',
        score: '76',
      },
      {
        id: 2,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        progress: '80',
        status: 'Ongoing',
        score: '76',
      },
      {
        id: 3,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        progress: '80',
        status: 'Ongoing',
        score: '76',
      },
    ],
    headerAllClass: [
      {
        id: 1,
        firstHeader: 'Class Name',
        secondHeader: 'Category',
        thirdHeader: 'Description',
        fourthHeader: 'Level',
        fifthHeader: 'Pricing',
      },
    ],
    allClass: [
      {
        id: 1,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 2,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 3,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 4,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 5,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 6,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
    ],
  };

  renderTableHeaderMyClass = () => {
    return this.state.headerMyClass.map((subHeader) => {
      const {
        id,
        firstHeader,
        secondHeader,
        thirdHeader,
        fourthHeader,
        fifthHeader,
        sixthHeader,
      } = subHeader;
      return (
        <tr className="th-myclass" key={id}>
          <th className="first-head">
            <input type="checkbox" />
          </th>
          <th>{firstHeader}</th>
          <th>{secondHeader}</th>
          <th>{thirdHeader}</th>
          <th>{fourthHeader}</th>
          <th>{fifthHeader}</th>
          <th>{sixthHeader}</th>
          <th className="last-head"></th>
        </tr>
      );
    });
  };

  renderTableDataMyClass = () => {
    return this.state.myClass.map((subClass) => {
      const {
        id,
        classname,
        category,
        description,
        progress,
        status,
        score,
      } = subClass;
      return (
        <tr className="td-myclass" key={id}>
          <td className="first-data">
            <input type="checkbox" />
          </td>
          <td>{classname}</td>
          <td>{category}</td>
          <td>{description}</td>
          <td>{progress}%</td>
          <td>{status}</td>
          <td>{score}</td>
          <td className="last-data">:</td>
        </tr>
      );
    });
  };

  renderTableHeaderClass = () => {
    return this.state.headerAllClass.map((subHeader) => {
      const {
        id,
        firstHeader,
        secondHeader,
        thirdHeader,
        fourthHeader,
        fifthHeader,
      } = subHeader;
      return (
        <tr className="table-row-header" key={id}>
          <th>{firstHeader}</th>
          <th>{secondHeader}</th>
          <th>{thirdHeader}</th>
          <th>{fourthHeader}</th>
          <th>{fifthHeader}</th>
          <th></th>
          <th></th>
        </tr>
      );
    });
  };

  renderTableDataClass = () => {
    return this.state.allClass.map((subClass) => {
      const { id, classname, category, description, level, pricing } = subClass;
      return (
        <tr className="table-row-data" key={id}>
          <td>{classname}</td>
          <td>{category}</td>
          <td>{description}</td>
          <td>{level}</td>
          <td>{pricing}</td>
          <td>
            <button className="register-button">Register</button>
          </td>
          <td>:</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container-activity">
        <Navbar />
        <Sidebar />

        <section className="activity-content">
          <h2 className="activity-title">Activity</h2>

          <div className="my-class">
            <h5 className="my-class-title">My Class</h5>
            <div className="table-myclass">
              <table className="table-my-class">
                <thead>{this.renderTableHeaderMyClass()}</thead>
                <tbody>{this.renderTableDataMyClass()}</tbody>
              </table>
            </div>
            <div className="view-myclass">
              <button>view all</button>
            </div>
          </div>

          <div className="new-class">
            <h5 className="new-class-title">New Class</h5>
            <div className="table-newclass">
              <div className="search-class">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Quick Search"
                />
                <button className="search-button">search</button>
              </div>
              <div className="sorting-option">
                <select name="category" id="category">
                  <option value="">Category</option>
                </select>
                <select name="level" id="level">
                  <option value="">Level</option>
                </select>
                <select name="pricing" id="pricing">
                  <option value="">Pricing</option>
                </select>
              </div>
              <table className="table-new-class">
                <thead>{this.renderTableHeaderClass()}</thead>
                <tbody>{this.renderTableDataClass()}</tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
