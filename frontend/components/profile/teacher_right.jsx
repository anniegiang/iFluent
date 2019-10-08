import React from "react";
import TeacherBook from "./teacher_book";
import TeacherSchedule from "./teacher_schedule";

class TeacherRight extends React.Component {
  render() {
    return (
      <div
        className="teacher-right"
        style={{ left: "auto", top: "auto", bottom: "auto" }}
      >
        <TeacherBook teacher={this.props.teacher} />
        <TeacherSchedule />
      </div>
    );
  }
}

export default TeacherRight;
