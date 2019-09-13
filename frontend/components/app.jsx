import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainNavBarContainer from './navbar/main_navbar_container';
import Modal from './modal/modal';

import HomePage from './homepage/homepage';
import Dashboard from './dashboard/dashboard';

const App = () => (
  <div className="italki">
    <Modal />
    <header className="header">
        <MainNavBarContainer />
    </header>

    <Switch>
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <AuthRoute exact path="/" component={HomePage}/>
    </Switch>

  </div>
);

export default App;