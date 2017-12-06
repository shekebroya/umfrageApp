import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="col s12">
            <h1>Dashboard</h1>
            <div className="fixed-action-btn">
              <Link
                to="/umfragen/neue-umfrage"
                className="btn-floating btn-large gradient"
              >
                <i className="large material-icons">add</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
