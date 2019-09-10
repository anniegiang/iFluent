import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signupUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);