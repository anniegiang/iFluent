import React from 'react';
import MainNavBarContainer from './navbar/main_navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import Modal from './modal/modal';
import TeachersSlider from './slider/teachers_slider';
import WhyItalki from './why_italki/why_italki';
import Companies from './why_italki/companies';
import HowItWorks from './how_it_works/how_it_works';
import Dashboard from './dashboard/dashboard';
import SearchBar from './search/search_bar';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="italki">
    <Modal />
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
        <div className="homepage-teachers-slider">
          <TeachersSlider />
        </div>
        <div className="homepage-top-gray"></div>
        <div className="homepage-why-italki">
          <h1 className="why-italki-title"><span>Why ifluent?</span></h1> 
          <WhyItalki />     
          <Companies />
        </div>
        <div className="homepage-how-works">
          <h1 className="how-it-works-title"><span>How does it work?</span></h1>
          <HowItWorks />
        </div>
      </div>
    </div>

    {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/" component={Dashboard}/>

  </div>
);

export default App;