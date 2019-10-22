import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllBookings, deleteBooking } from '../../actions/booking_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    bookings: Object.values(state.entities.bookings)
  }
};

const mdp = dispatch => {
  return {
    fetchAllBookings: () => dispatch(fetchAllBookings()),
    deleteBooking: id => dispatch(deleteBooking(id))
  }
};

export default connect(
  msp,
  mdp
)(Dashboard)
