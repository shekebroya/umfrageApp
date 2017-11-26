import React, { Component } from 'react';
import './Footer.css'; // Tells Webpack that Header.js uses these styles
import { connect } from 'react-redux';

class Footer extends Component {
  renderContent() {
    console.log(this.props);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="row">
            <div className="col s6">col s6</div>
            <div className="col s6">col s6</div>
          </div>
        );
      default:
        return (
          <div className="row">
            <div className="col m3 s6">col m3 s6</div>
            <div className="col m3 s6">col m3 s6</div>
            <div className="col m3 s6">col m3 s6</div>
            <div className="col m3 s6">col m3 s6</div>
          </div>
        );
    }
  }
  render() {
    return (
      <div className="footer gradient">
        <div className="container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Footer);
