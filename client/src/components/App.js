import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h1>Header</h1>;
const Landingpage = () => <h1>Landingpage</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const FeddbackNew = () => <h1>FeddbakNew</h1>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/umfrage" component={Dashboard} />
          <Route path="/umfrage/neue-umfrage" component={FeddbackNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
