import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div className="review review-active">
      <div className="background-overlay"> </div>
      <div className="form-review">
        <div className="container">
          <div className="email-review">
            <div className="form-fields">
              <div className="row">
                <div className="col s12">
                  <h4>Letzte Gelegenheit für Korrekturen.</h4>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6">Titel</div>
                <div className="col s12 m6">{formValues.title}</div>
              </div>
              <div className="row">
                <div className="col s12 m6">Thematik (Betreff)</div>
                <div className="col s12 m6">{formValues.subject}</div>
              </div>
              <div className="row">
                <div className="col s12 m6">Beschreibung (Ziel)</div>
                <div className="col s12 m6">{formValues.body}</div>
              </div>
              <div className="row">
                <div className="col s12 m6">E-Mail Adressen</div>
                <div className="col s12 m6">{formValues.recipients}</div>
              </div>
            </div>
            <div className="form-buttons">
              <div className="row">
                <div className="col s12 m6">
                  <button
                    className="waves-effect waves-light btn-flat dark-blue left"
                    onClick={onCancel}
                  >
                    <i className="material-icons left">arrow_back</i>Bearbeiten
                  </button>
                </div>
                <div className="col s12 m6">
                  <button
                    onClick={() => submitSurvey(formValues, history)}
                    className="waves-effect waves-light btn-flat dark-blue left"
                  >
                    Senden<i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
