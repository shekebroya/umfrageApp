import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview />;
    }
  }
  render() {
    return (
      <div className="content">
        <div
          className={
            this.state.showFormReview
              ? 'umfrage-formular blurry'
              : 'umfrage-formular '
          }
        >
          <SurveyForm
            onSurveySubmit={() => this.setState({ showFormReview: true })}
          />
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
