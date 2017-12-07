import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyFieldInput from './SurveyFieldInput';
import SurveyFieldTextarea from './SurveyFieldTextarea';
import './SurveyForm.css';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div className="form-field-list">
        <div className="row">
          <Field
            label="Titel"
            toolTip="My Seconds tootip ever"
            type="text"
            name="title"
            component={SurveyFieldInput}
          />
          <Field
            label="Thematik"
            toolTip="My Seconds tootip ever"
            type="text"
            name="subject"
            component={SurveyFieldInput}
          />
        </div>
        <div className="row">
          <Field
            label="Beschreibung"
            toolTip="My Seconds tootip ever"
            className="materialize-textarea"
            type="text"
            name="body"
            component={SurveyFieldTextarea}
          />
          <Field
            label="Empfänger E-Mail Adressen"
            toolTip="My first tootip ever"
            className="materialize-textarea"
            type="text"
            name="recipients"
            component={SurveyFieldTextarea}
          />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="umfrage-formular">
        <div className="title">
          <div className="row">
            <div className="col s12">
              <h1>Umfrage erstellen</h1>
              <p>
                Um eine Umfrage zu erstellen müssend die folgenden Felder
                ausgefüllt werden.
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <div className="form-buttons">
            <div className="row">
              <div className="col s6">
                <Link
                  to="/umfragen"
                  type="cancel"
                  className="waves-effect waves-light btn gradient left"
                >
                  <i className="material-icons left">cancel</i>Abbrechen
                </Link>
              </div>
              <div className="col s6">
                <button
                  type="submit"
                  className="waves-effect waves-light btn gradient right"
                >
                  <i className="material-icons left">save</i>Speichern
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Titel ist ein Pflichtfeld.';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
