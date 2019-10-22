import React from "react";
import TeacherBook from "./teacher_book";
import TeacherSchedule from "./teacher_schedule";

const TeacherRight = props => {
  return (
    <div
      className="teacher-right"
      style={{ left: "auto", top: "auto", bottom: "auto" }}
    >
      <TeacherBook teacher={props.teacher} />
      <TeacherSchedule openTimeSlots={props.openTimeSlots} />
    </div>
  );
};

export default TeacherRight;
