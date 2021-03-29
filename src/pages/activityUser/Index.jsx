import React, { Component } from 'react';

import Navbar from '../../components/navbar/Index';
import Sidebar from '../../components/sidebar/Index';

export class Index extends Component {
  state = {
    allClass: [
      {
        id: '1',
        className: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
    ],
  };

  renderTableData = () => {
    return this.state.allClass.map((subClass) => {
      const { id, classname, category, description, level, pricing } = subClass;
      return (
        <tr key={id}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{classname}</td>
          <td>{category}</td>
          <td>{description}</td>
          <td>{level}</td>
          <td>{pricing}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container-activity">
        <Navbar />
        <Sidebar />

        <section
          className="activity-content"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className="activity-title">Activity</h2>
          <div className="my-class">
            <h5>My Class</h5>
            <div className="table-myclass" style={{ marginTop: '4vh' }}>
              <table>
                <tbody>{this.renderTableData()}</tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
