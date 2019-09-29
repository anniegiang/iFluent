import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginForm from "./login_form";
import { login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  otherForm: () => <a onClick={() => dispatch(openModal("signup"))}>Sign Up</a>,
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
