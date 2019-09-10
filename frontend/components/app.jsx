import React from 'react';
import MainNavBarContainer from './navbar/main_navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div class="italki">
    <header>
        <MainNavBarContainer />
    </header>
    <div class="flex-container">
      <div class="homepage">
        <div class="homepage-hero">
          <Splash />
        </div>
      </div>
    </div>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);

export default App;