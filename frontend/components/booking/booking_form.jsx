import React from "react";
import LandingNavBarContainer from "../navbar/landing_navbar_container";
import Calendar from "../calendar/calendar";

class BookingForm extends React.Component {
  componentDidMount() {
    this.props.fetchTeacher(parseInt(this.props.match.params.teacherId));
    this.props.fetchLessons(parseInt(this.props.match.params.teacherId));
    this.props.fetchAllTimeSlots(parseInt(this.props.match.params.teacherId));
  }

  render() {
    if (!this.props.teacher || !this.props.lessons || !this.props.timeSlots) {
      return null;
    }
    const { teacher, lessons, timeSlots } = this.props;
    return (
      <React.Fragment>
        <LandingNavBarContainer />
        <div className="booking-form-container">
          <h1>Book a lesson</h1>
          <Calendar />
        </div>
      </React.Fragment>
    );
  }
}

export default BookingForm;
