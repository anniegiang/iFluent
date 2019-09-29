import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Modal from "./modal/modal";
import Splash from "./splash/splash";
import Landing from "./landing/landing";

const App = () => (
  <div className="app">
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/dashboard" component={Landing} />
    </Switch>
  </div>
);

export default App;
