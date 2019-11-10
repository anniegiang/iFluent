import React from "react";
import LandingNavBarContainer from "../navbar/landing_navbar_container";
import LessonOption from "./lesson_option";
import OpenTimeOption from "./open_time_option";
import Moment from "react-moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lesson: null,
      lessonItem: null,
      openTimeSlot: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.teacherId;

    this.props.fetchTeacher(parseInt(id));
    this.props.fetchLessons(parseInt(id));
    this.props.fetchAllOpenTimeSlots(parseInt(id));
  }

  handleClick(type, data) {
    if (type === "lessonItem") {
      this.setState({ lesson: data.lesson, lessonItem: data.item }, () => {
        this.handleSelectedLessonOption(this.state.lessonItem.id);
      });
    } else {
      this.setState({ [type]: data }, () => {
        this.handleSelectedTimeOption(this.state.openTimeSlot.id);
      });
    }
  }

  handleSelectedTimeOption(id) {
    const allTimeOptions = Array.from(
      document.getElementsByClassName("time-option")
    );

    let option;
    for (let i = 0; i < allTimeOptions.length; i++) {
      let option = allTimeOptions[i];
      let optionId = parseInt(allTimeOptions[i].id);
      if (option.selected || optionId === id) {
        option.selected = !option.selected;
        option.classList.toggle("selected");
      }
    }
  }

  handleSelectedLessonOption(id) {
    const allLessonOptions = Array.from(
      document.getElementsByClassName("lesson-item")
    );

    let option;
    for (let i = 0; i < allLessonOptions.length; i++) {
      let option = allLessonOptions[i];
      let optionId = parseInt(allLessonOptions[i].id);
      if (option.selected || optionId === id) {
        option.selected = !option.selected;
        option.classList.toggle("selected");
      }
    }
  }

  handleSubmit(e) {
    if (this.state.lessonItem && this.state.openTimeSlot) {
      e.preventDefault();

      const { openTimeSlot, lessonItem } = this.state;

      let data = {
        student_id: this.props.currentUser.id,
        teacher_id: parseInt(this.props.match.params.teacherId),
        lesson_item_id: lessonItem.id,
        start_time: openTimeSlot.startTime,
        duration: lessonItem.duration
      };
      this.props.deleteOpenTimeSlot(openTimeSlot.id);
      this.props.createBooking(data).then(() => {
        this.props.history.push("/dashboard");
        location.reload();
      });
    } else {
      alert("Booking incomplete");
    }
  }

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
          <h1>Book a lesson with {teacher.name}</h1>
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <div className="lesson-options-container">
              <h1 className="lesson-options-title">Choose your lesson</h1>
              {lessons.map(lesson => {
                return (
                  <LessonOption
                    key={lesson.id}
                    handleClick={this.handleClick}
                    lesson={lesson}
                  />
                );
              })}
            </div>
            <div className="time-options-container">
              <h1 className="time-options-title">Teacher Availablity</h1>
              <div className="time-options">
                {openTimeSlots.length === 0
                  ? "Teacher is currently unavailable."
                  : openTimeSlots.map(openTimeSlot => {
                      return (
                        <OpenTimeOption
                          key={openTimeSlot.id}
                          handleClick={this.handleClick}
                          openTimeSlot={openTimeSlot}
                        />
                      );
                    })}
              </div>
              <div className="booking-review">
                <h1 className="booking-review-title">Your Booking</h1>
                <h2 className="booking-review-name">
                  <span className="booking-review-headings"> Lesson: </span>
                  {this.state.lessonItem === null || this.state.lesson === null
                    ? ""
                    : this.state.lesson.title}
                </h2>
                <h2 className="booking-review-duration">
                  <span className="booking-review-headings"> Duration: </span>
                  {this.state.lessonItem === null || this.state.lesson === null
                    ? ""
                    : this.state.lessonItem.duration + " minutes"}
                </h2>
                <h2 className="booking-review-price">
                  <span className="booking-review-headings"> Price: </span>
                  {this.state.lessonItem === null || this.state.lesson === null
                    ? ""
                    : "$" + this.state.lessonItem.price}
                </h2>
                <h2 className="booking-review-time">
                  <span className="booking-review-headings"> When: </span>
                  {this.state.openTimeSlot === null ? (
                    ""
                  ) : (
                    <Moment className="time-option-start-time" format="LLLL">
                      {this.state.openTimeSlot.startTime}
                    </Moment>
                  )}
                </h2>
              </div>
              <input
                className="booking-form-submit"
                type="submit"
                value="Book now"
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default BookingForm;
