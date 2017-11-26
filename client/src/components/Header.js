import React, { Component } from 'react';
import './Header.css'; // Tell Webpack that Header.js uses these styles

class Header extends Component {
  render() {
    return (
      <div className="header gradient">
        <div className="container">
          <div className="row">
            <div className="header__logo col s4">
              <a className="header__logo__link" href="/">
                UM<i className="medium">frage</i>
                <i className="small">?!</i>
              </a>
            </div>
            <ul className="header__navigation col s8">
              <li>
                <a href="">Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
