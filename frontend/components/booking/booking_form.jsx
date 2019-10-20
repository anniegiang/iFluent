import React from "react";
import LandingNavBarContainer from "../navbar/landing_navbar_container";
import Moment from "react-moment";

class BookingForm extends React.Component {
  componentDidMount() {
    this.props.fetchTeacher(parseInt(this.props.match.params.teacherId));
    this.props.fetchLessons(parseInt(this.props.match.params.teacherId));
    this.props.fetchAllOpenTimeSlots(
      parseInt(this.props.match.params.teacherId)
    );
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
          {timeSlots.map(slot => (
            <Moment format="LLLL">{slot.endTime}</Moment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default BookingForm;
