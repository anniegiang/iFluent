import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import MainNavBarContainer from "./navbar/main_navbar_container";
import DashboardContainer from "./dashboard/dashboard_container";
import SearchResultsContainer from "./search/search_results_container";
// import TeacherProfileContainer from './profile/teacher_profile_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from "./modal/modal";
import HomePage from "./homepage/homepage";
import Footer from "./footer/footer";

const App = () => (
  <div className="italki">
    <Modal />
    <MainNavBarContainer />
    <Switch>
      {/* <Route exact path="/teachers/:teacherId/:languageName" component={TeacherProfileContainer} /> */}
      <Route
        exact
        path="/teachers/:languageName"
        component={SearchResultsContainer}
      />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={HomePage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
