export const fetchAllBookings = () => {
  return $.ajax({
    method: "GET",
    url: "/api/bookings"
  });
};

export const fetchBooking = id => {
  return $.ajax({
    method: "GET",
    url: `/api/bookings/${id}`
  });
};
