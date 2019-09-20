import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    lessons:  Object.values(state.entities.users[state.session.id].enrolledLessons)
})


export default connect(msp)(Dashboard);