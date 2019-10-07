import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import LandingNavBar from "./landing_navbar";

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    loginModal: () => dispatch(openModal("login")),
    signupModal: () => dispatch(openModal("signup"))
  };
};

export default connect(
  msp,
  mdp
)(LandingNavBar);
