import React from "react";
import TeacherMain from "./teacher_main";
import TeacherRight from "./teacher_right";
import LandingNavBarContainer from "../navbar/landing_navbar_container";

class TeacherProfile extends React.Component {
  componentDidMount() {
    this.props.fetchTeacher(parseInt(this.props.match.params.teacherId));
    this.props.fetchLessons(parseInt(this.props.match.params.teacherId));
  }

  render() {
    if (!this.props.teacher || !this.props.lessons) {
      return null;
    }
    return (
      <React.Fragment>
        <LandingNavBarContainer />
        <div className="Teacher">
          <TeacherMain
            lessons={this.props.lessons}
            teacher={this.props.teacher}
          />
          <TeacherRight
            teacher={this.props.teacher}
            lessons={this.props.lessons}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherProfile;
