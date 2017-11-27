import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Tells Webpack that Header.js uses these styles
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Sign in</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <div className="header gradient">
        <div className="container">
          <div className="row">
            <div className="header__logo col s4">
              <Link
                to={this.props.auth ? '/umfragen' : '/'}
                className="header__logo__link"
                href=""
              >
                UM<i className="medium">frage</i>
                <i className="small">?!</i>
              </Link>
            </div>
            <ul className="header__navigation col s8">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
