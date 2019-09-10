import React from 'react';
import MainNavBarContainer from './navbar/main_navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import SearchBar from './search/search_bar';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="italki">
    <header className="header">
        <MainNavBarContainer />
    </header>
    <div className="flex-container">
      <div className="homepage">
        <div className="homepage-hero">
          <Splash />
          <div className="homepage-fluent">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);

export default App;