import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignupForm from "./signup_form";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupForm)
);
