import { connect } from 'react-redux';
import MainNavBar from './main_navbar';
import { logoutUser, loginUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(dispatch(loginUser(user))),
  logoutUser: () => dispatch(dispatch(logoutUser())),
  openModalLogin: () => dispatch(openModal("login")),
  openModalSignup: () => dispatch(openModal("signup")),
  closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavBar));
