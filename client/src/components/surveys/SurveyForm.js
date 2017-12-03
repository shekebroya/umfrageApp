import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div className="umfrage-formular">
        <h3>Anleitung zum Erstellen einer Umfragemail</h3>
        <h5>Was gehört in eine Umfragemail? </h5>
        <ol>
          <li>Betreff mit dem Titel der Umfrage</li>
          <li>Verständliche Entscheidungsfrage</li>
          <li>
            Die Entscheidungsfrage stellt eine Frage, die mit „Ja“ oder „Nein“
            beantwortet werden kann.
          </li>
          <li>
            Eine Einleitung mit der Begründung, warum die Umfrage durchgeführt
            wird (Ziel).
          </li>
          <li>
            Die wichtigste Mitteilung, die Sie Ihren Teilnehmenden mitteilen
            möchten, nämlich, dass Sie sie bitten, an der Befragung
            teilzunehmen.
          </li>
          <li>Anonymität. Weisen Sie auf Ihre Handhabung des Themas hin.</li>
          <li>
            <strong>
              Service oder Begründung: Was hat der Teilnehmende davon, wenn er
              an der Befragung teilnimmt? Was geschieht mit den Ergebnissen?
            </strong>
          </li>
          <li>
            Ansprechpartner / Kontakte für Rückfragen. Auch wenn ganz wenige
            Teilnehmend sich tatsächlich bei Ihnen melden werden: eine seriöse
            und möglichst vollständige Absenderangabe inkl. Name, Signatur,
            Telefonnummer, E-Mail-Adresse, Funktion, etc. erhöht die
            Rücklaufquote und das Vertrauen in die Befragungseinladung.
          </li>
          <li>Verabschiedung/Danksagung/Wertschätzung</li>
        </ol>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <div className="row">
            <div className="col s12 m6">
              <Field
                type="text"
                name="umfrageTitel"
                component="input"
                placeholder="Bitte geben Sie den Titel Ihrer Umfrage ein."
              />
            </div>
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
