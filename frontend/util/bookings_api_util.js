export const fetchAllBookings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/bookings'
  })
};

export const fetchBooking = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings/${id}`
  })
};

export const createBooking = booking => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking }
  })
};

export const deleteBooking = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`
  })
};
