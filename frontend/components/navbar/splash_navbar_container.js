import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SplashNavBar from "./splash_navbar";
import { withRouter } from "react-router-dom";

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    signup: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    openModalLogin: () => dispatch(openModal("login")),
    openModalSignup: () => dispatch(openModal("signup")),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(SplashNavBar)
);
