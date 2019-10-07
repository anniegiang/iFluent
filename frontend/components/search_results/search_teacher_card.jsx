import React from "react";
import TeacherCardLeft from "./search_teacher_card_left";
import TeacherCardRight from "./search_teacher_card_right";

const TeacherCard = props => {
  return (
    <div className="search-teacher-card_container">
      <TeacherCardLeft teacher={props.teacher} />
      <TeacherCardRight teacher={props.teacher} />
    </div>
  );
};

export default TeacherCard;
