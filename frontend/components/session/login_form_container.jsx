import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "login"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(loginUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

