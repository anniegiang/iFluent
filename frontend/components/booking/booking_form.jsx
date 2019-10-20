import React from "react";
import LandingNavBarContainer from "../navbar/landing_navbar_container";
import Moment from "react-moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: this.props.currentUser.id,
      teacher_id: null,
      lesson_item_id: null,
      start_time: null,
      end_time: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeacher(parseInt(this.props.match.params.teacherId));
    this.props.fetchLessons(parseInt(this.props.match.params.teacherId));
    this.props.fetchAllOpenTimeSlots(
      parseInt(this.props.match.params.teacherId)
    );
  }

  handleChange(lessonId) {
    return e => {
      console.log(lessonId);
    };
  }
  handleSubmit() {}

  render() {
    if (
      !this.props.teacher ||
      !this.props.lessons ||
      !this.props.openTimeSlots
    ) {
      return null;
    }
    const { teacher, lessons, openTimeSlots } = this.props;
    return (
      <React.Fragment>
        <LandingNavBarContainer />

        <div className="booking-form-container">
          <h1>Book a lesson</h1>

          {openTimeSlots.map(slot => (
            <li>
              <Moment format="LLLL">{slot.startTime}</Moment> -
              <Moment format="LLLL">{slot.endTime}</Moment>
            </li>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default BookingForm;
