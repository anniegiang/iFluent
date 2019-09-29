import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SplashNavBarContainer from "./navbar/splash_navbar_container";
import Modal from "./modal/modal";

const App = () => (
  <div className="app">
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={SplashNavBarContainer} />
    </Switch>
  </div>
);

export default App;
