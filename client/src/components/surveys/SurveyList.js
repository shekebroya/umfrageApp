import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  state = { sortByDate: true, sortByTitle: false };

  handleSort = () => {
    this.setState({ sortByDate: false, sortByTitle: true });
    console.log(this.state.sortByDate);
    this.props.surveys.map(survey => {
      return console.log(new Date(survey.dateSent));
    });
  };
  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div
          className="card darken-1"
          key={survey._id}
          datakey={
            this.state.sortByDate
              ? new Date(survey.dateSent).toISOString().slice(0, 10)
              : survey.title
          }
        >
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Gesendet am: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Ja: {survey.ja}</a>
            <a>Nein: {survey.nein}</a>
            <button
              onClick={() => this.props.deleteSurvey(survey._id)}
              className="btn gradient right"
            >
              <i className="small material-icons">delete</i>
              Löschen
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="sorting">
          <button onClick={this.handleSort}>Click Me</button>
        </div>
        {this.renderSurveys()}
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
