import { connect } from 'react-redux';
import MainNavBar from './main_navbar';
import { logoutUser, loginUser } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
  logout: () => dispatch(logoutUser())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavBar));
