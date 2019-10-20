export const fetchAllBookings = () => {
  return $.ajax({
    method: "GET",
    url: "/api/bookings"
  });
};

export const createBooking = booking => {
  return $.ajax({
    method: "POST",
    url: "/api/bookings",
    booking
  });
};

export const fetchBooking = id => {
  return $.ajax({
    method: "GET",
    url: `/api/bookings/${id}`
  });
};
