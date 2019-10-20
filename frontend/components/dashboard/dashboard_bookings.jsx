import React from "react";
import Moment from "react-moment";

class DashboardBookings extends React.Component {
  render() {
    const { bookings } = this.props;
    debugger;
    return (
      <div className="dashboard-bookings-container">
        <h1 className="bookings-title">Upcoming Lessons</h1>
        {!bookings.length && (
          <h5 style={{ textAlign: "center" }}>No upcoming lessons</h5>
        )}
        <ul className="bookings-container">
          {bookings.sort().map(booking => (
            <li className="booking-info" key={booking.id}>
              <h3 className="lesson-language">{booking.languageName}</h3>
              <h4 className="lesson-title">{booking.title}</h4>
              <h4 className="lesson-teacher">Teacher: {booking.teacher}</h4>
              <h4 className="lesson-teacher">
                Duration: {booking.duration} minutes
              </h4>
              <Moment format="LLLL">{booking.startTime}</Moment>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DashboardBookings;
