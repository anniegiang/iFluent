import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
});

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));
