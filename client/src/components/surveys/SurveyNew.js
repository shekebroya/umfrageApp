import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <SurveyForm />
        </div>
      </div>
    );
  }
}

export default SurveyNew;
