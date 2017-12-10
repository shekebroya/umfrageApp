import React, { Component } from 'react';
import './Footer.css'; // Tells Webpack that Header.js uses these styles
import { connect } from 'react-redux';

class Footer extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <div className="row" />;
      default:
        return <div className="row" />;
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
