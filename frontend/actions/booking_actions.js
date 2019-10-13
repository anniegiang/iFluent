import * as APIUtil from "../util/bookings_api_util";

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

// thunk
export const fetchAllBookings = () => dispatch => {
  return APIUtil.fetchAllBookings().then(bookings =>
    dispatch(receiveAllBookings(bookings))
  );
};

export const fetchBooking = id => dispatch => {
  return APIUtil.fetchBooking(id).then(booking =>
    dispatch(receiveBooking(booking))
  );
};
