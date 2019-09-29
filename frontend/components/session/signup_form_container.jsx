import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SessionForm from "./session_form";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  otherForm: () => <a onClick={() => dispatch(openModal("login"))}>Log In</a>,
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
