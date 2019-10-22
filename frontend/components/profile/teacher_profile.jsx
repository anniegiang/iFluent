import React from "react";
import TeacherMain from "./teacher_main";
import TeacherRight from "./teacher_right";
import LandingNavBarContainer from "../navbar/landing_navbar_container";

class TeacherProfile extends React.Component {
  componentDidMount() {
    const teacherId = parseInt(this.props.match.params.teacherId);
    this.props.fetchTeacher(teacherId);
    this.props.fetchLessons(teacherId);
    this.props.fetchOpenTimeSlots(teacherId);
  }

  render() {
    if (
      !this.props.teacher ||
      !this.props.lessons ||
      !this.props.openTimeSlots
    ) {
      return null;
    }
    const { lessons, teacher, openTimeSlots } = this.props;
    return (
      <React.Fragment>
        <LandingNavBarContainer />
        <div className="Teacher">
          <TeacherMain lessons={lessons} teacher={teacher} />
          <TeacherRight
            teacher={teacher}
            lessons={lessons}
            openTimeSlots={openTimeSlots}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherProfile;
