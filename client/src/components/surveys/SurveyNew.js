import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <SurveyForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SurveyNew;
