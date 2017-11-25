import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Landingpage = () => <h1>Landingpage</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const FeedbackNew = () => <h1>FeedbackNew</h1>;
const Footer = () => <h1>Footer</h1>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/umfragen" component={Dashboard} />
          <Route path="/umfragen/neue-umfrage" component={FeedbackNew} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
