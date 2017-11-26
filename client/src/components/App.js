import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Landingpage = () => <h1>Landingpage</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const FeedbackNew = () => <h1>FeedbackNew</h1>;
const Footer = () => <h1>Footer</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Header />
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/umfragen" component={Dashboard} />
          <Route path="/umfragen/neue-umfrage" component={FeedbackNew} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
