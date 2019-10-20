import React from "react";
import LandingNavBarContainer from "../navbar/landing_navbar_container";
import LessonOption from "./lesson_option";
import Moment from "react-moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentId: this.props.currentUser.id,
      teacherId: null,
      lessonItemId: null,
      startTime: null,
      endTime: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.teacherId;

    this.props.fetchTeacher(parseInt(id));
    this.props.fetchLessons(parseInt(id));
    this.props.fetchAllOpenTimeSlots(parseInt(id));
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value }, () => {
        console.log(this.state);
      });
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
          <form onSubmit={this.handleSubmit}>
            {lessons.map(lesson => {
              return (
                <LessonOption
                  handleChange={this.handleChange}
                  lesson={lesson}
                />
              );
            })}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default BookingForm;
