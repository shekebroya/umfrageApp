import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyFieldInput from './SurveyFieldInput';
import SurveyFieldTextarea from './SurveyFieldTextarea'; //name always undefined
import './SurveyForm.css';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div className="row">
        <Field
          label="Titel"
          type="text"
          name="title"
          component={SurveyFieldInput}
        />
        <Field
          label="Thematik"
          type="text"
          name="subject"
          component={SurveyFieldInput}
        />
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
    );
  }
  render() {
    return (
      <div className="umfrage-formular">
        <div className="row">
          <div className="col s12">
            <h1>Neue Umfrage</h1>
            <p>
              Um eine Umfrage zu erstellen müssend die folgenden Felder
              ausgefüllt werden.
            </p>
          </div>
        </div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}

          <div className="row">
            <div className="col s12">
              <button
                type="submit"
                className="waves-effect waves-light btn gradient right"
              >
                <i className="material-icons left">save</i>Speichern
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
