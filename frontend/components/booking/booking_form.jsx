import React from "react";

class BookingForm extends React.Component {
  componentDidMount() {
    debugger;
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
      <div className="booking-form-container">
        <h1>Booking Formmmmmm</h1>
      </div>
    );
  }
}

export default BookingForm;
