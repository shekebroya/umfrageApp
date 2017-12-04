import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field label="Titel" type="text" name="title" component={SurveyField} />
        <Field
          label="Betreff"
          type="text"
          name="subject"
          component={SurveyField}
        />
        <Field
          label="Beschreibung"
          type="text"
          name="body"
          component={SurveyField}
        />
        <Field
          label="E-Mail Adreessen mit ';' separiert"
          type="textarea"
          name="title"
          component={SurveyField}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="umfrage-formular">
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <div className="row">
            <div className="col s12 m6">{this.renderFields()}</div>
            <div className="col s12">
              <button
                type="submit"
                className="waves-effect waves-light btn blue right"
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
