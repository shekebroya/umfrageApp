import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="col s12">
            <SurveyList />
            <div className="fixed-action-btn">
              <Link
                to="/umfragen/umfrage-erstellen"
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
