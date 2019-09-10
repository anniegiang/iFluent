import { login, logout, signup } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// Thunk action creators

export const signupUser = user => dispatch => signup(user)
  .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )

export const loginUser = user => dispatch => login(user)
  .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logoutUser = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()));

