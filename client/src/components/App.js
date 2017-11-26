import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landingpage from './Landingpage';
import Dashboard from './Dashboard';
import FeedbackNew from './FeedbackNew';
import Footer from './Footer';

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
