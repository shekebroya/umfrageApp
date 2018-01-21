import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Gesendet am: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12 m6">
                <div className="feedbacks">
                  <p>Abgestimmt mit</p>
                  <div className="feedback">
                    <strong className="darkest-blue">Ja: {survey.ja}</strong>
                  </div>
                  <div className="feedback">
                    <strong className="darkest-blue">
                      Nein: {survey.nein}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <button
                  onClick={() => this.props.deleteSurvey(survey._id)}
                  className="waves-effect waves-light btn-flat dark-blue right"
                >
                  <i className="material-icons right">delete</i>
                  Löschen
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.surveys.length > 0) {
      return <div>{this.renderSurveys()}</div>;
    }
    return (
      <div>
        <h1>Erstellen Sie Ihre erste Umfrage</h1>
        <p>
          Um eine Umfrage zu erstellen müssen Sie rechts auf
          <i className="material-icons">add_circle</i>
          drücken, das Formular ausfüllen und versenden.
        </p>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
