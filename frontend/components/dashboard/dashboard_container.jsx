import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import { fetchAllBookings, fetchBooking } from '../../actions/booking_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    bookings: Object.values(state.entities.bookings)
  }
};

const mdp = dispatch => {
  return {
    fetchAllBookings: () => dispatch(fetchAllBookings()),
    fetchBooking: id => dispatch(fetchBooking(id))
  }
};

export default connect(
  msp,
  mdp
)(Dashboard)
