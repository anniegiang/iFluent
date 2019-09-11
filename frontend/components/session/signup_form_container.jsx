import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SessionForm from './session_form';
import { signupUser, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signupUser(user)),
  otherForm: () => (
      <a onClick={() => dispatch(openModal('login'))}>
        Log In
      </a>
    ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));