import React from "react";
import Moment from "react-moment";

const DashboardBookings = props => {
  const { bookings } = props;

  const handleDelete = id => {
    props.deleteBooking(id);
    location.reload();
  };

  return (
    <div className="dashboard-bookings-container">
      <h1 className="bookings-title">Upcoming Lessons</h1>
      {!bookings.length && (
        <h5 style={{ textAlign: "center" }}>No upcoming lessons</h5>
      )}
      <ul className="bookings-container">
        {bookings.map(booking => (
          <li className="booking-info" key={booking.id}>
            <h3 className="lesson-language">{booking.languageName}</h3>
            <Moment format="LLLL">{booking.startTime}</Moment>
            <h4 className="lesson-teacher">
              Duration: {booking.duration} minutes
            </h4>
            <h4 className="lesson-title">{booking.title}</h4>
            <h4 className="lesson-teacher">
              Teacher:{" "}
              <a
                className="lesson-teacher-link"
                href={`#/teachers/${booking.teacherId}/${booking.languageName}`}
              >
                {booking.teacher}
              </a>
            </h4>
            <button
              className="cancel-booking-btn"
              onClick={() => handleDelete(booking.id)}
            >
              Cancel Booking
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardBookings;
