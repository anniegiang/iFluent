import React from "react";
import Moment from "react-moment";

class DashboardBookings extends React.Component {
  render() {
    const { bookings } = this.props;
    return (
      <div className="dashboard-bookings-container">
        <h1>Upcoming Lessons</h1>
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              <h3>{booking.languageName}</h3>
              <h4>{booking.title}</h4>
              <h4>{booking.teacher}</h4>
              <Moment format="LLLL">{booking.startTime}</Moment> -{" "}
              <Moment format="LT">{booking.endTime}</Moment>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DashboardBookings;
