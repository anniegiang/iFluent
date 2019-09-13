import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import MainNavBarContainer from './navbar/main_navbar_container';

import HomePage from './homepage/homepage';

import Dashboard from './dashboard/dashboard';

const App = () => (
  <div className="italki">
    <Modal />
    <header className="header">
        <MainNavBarContainer />
    </header>
    <div className="flex-container">
      {/* <HomePage /> */}
    </div>

    {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/" component={HomePage}/>

  </div>
);

export default App;