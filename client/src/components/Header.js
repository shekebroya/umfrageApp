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
            <a
              className="header__authentication logged-out"
              href="/auth/google"
            >
              <div>
                <i className="material-icons small">fingerprint</i>
              </div>
              <div>
                <span className="bold-upper">Sign in</span>
              </div>
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a className="header__authentication logged-in" href="/api/logout">
              <div>
                <i className="material-icons medium">face</i>
              </div>
              <div>
                <span>{this.props.auth.firstname}</span>
                <span className="bold-upper">Logout</span>
              </div>
            </a>
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
