import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { withRouter } from "react-router-dom";

import Modal from "./modal/modal";
import Splash from "./splash/splash";
import Landing from "./landing/landing";
import SearchResultsContainer from "./search_results/search_results_container";

const App = () => (
  <div className="app app-paddingTop-0">
    <div className="flex-container">
      <div style={{ position: "static", zIndex: "inherit" }}>
        <Modal />
        <Switch>
          <Route
            exact
            path="/teachers/:languageName"
            component={SearchResultsContainer}
          />
          <ProtectedRoute exact path="/dashboard" component={Landing} />
          <AuthRoute exact path="/" component={Splash} />
        </Switch>
      </div>
    </div>
  </div>
);

export default withRouter(App);
