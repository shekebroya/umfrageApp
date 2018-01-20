import React, { Component } from 'react';
import './Footer.css'; // Tells Webpack that Header.js uses these styles
import { connect } from 'react-redux';

class Footer extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <div className="col m4 offset-m2 s12" />;
      default:
        return (
          <div className="col m4 offset-m2 s12">
            <h5 className="white-text">Navigation</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-4" href="/">
                  <i className="material-icons tiny left">info</i>Anleitung
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-4" href="/umfragen">
                  <i className="material-icons tiny left">apps</i>Umfragen
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-4"
                  href="/umfragen/umfrage-erstellen"
                >
                  <i className="material-icons tiny left">add_circle</i>Umfrage
                  erstellen
                </a>
              </li>
            </ul>
          </div>
        );
    }
  }
  render() {
    return (
      <footer className="page-footer dark-blue">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <h5 className="white-text">Projektarbeit 2018</h5>
              <ul className="grey-text text-lighten-4">
                <li>
                  <i className="material-icons tiny left">face</i>
                  Shekeb Roya
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-4"
                    href="mailto:shekeb.roya@gmx.ch"
                  >
                    <i className="material-icons tiny left">email</i>
                    shekeb.roya@gmx.ch
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-4"
                    href="tel:+41764812016"
                  >
                    <i className="material-icons tiny left">phone_iphone</i>
                    +41 764 812 016
                  </a>
                </li>
              </ul>
            </div>
            {this.renderContent()}
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright UmfrageApp
            <a
              className="grey-text text-lighten-4 right"
              href="https://www.linkedin.com/in/shekeb-roya-3754697a/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Footer);
