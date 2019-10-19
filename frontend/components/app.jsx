import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { withRouter } from "react-router-dom";

import Footer from "./footer/footer";
import Modal from "./modal/modal";
import Splash from "./splash/splash";
import DashboardContainer from "./dashboard/dashboard_container";
import SearchResultsContainer from "./search_results/search_results_container";
import TeacherProfileContainer from "./profile/teacher_profile_container";
import BookingFormContainer from "./booking/booking_form_container";

const App = () => (
  <div className="app app-paddingTop-0">
    <div className="flex-container">
      <div style={{ position: "static", zIndex: "inherit" }}>
        <Modal />
        <Switch>
          <Route
            exact
            path="/teachers/:teacherId/:languageName"
            component={TeacherProfileContainer}
          />
          <Route
            exact
            path="/teachers/:languageName"
            component={SearchResultsContainer}
          />
          <ProtectedRoute
            exact
            path="/booking/teacher/:teacherId"
            component={BookingFormContainer}
          />
          <ProtectedRoute
            exact
            path="/dashboard"
            component={DashboardContainer}
          />
          <AuthRoute exact path="/" component={Splash} />
        </Switch>
      </div>
    </div>
    <Footer />
  </div>
);

export default withRouter(App);
