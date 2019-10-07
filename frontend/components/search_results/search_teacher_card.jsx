import React from "react";

const TeacherCard = props => {
  return (
    <div className="search-teacher-card_container">
      <h1>{props.teacher.name}</h1>
    </div>
  );
};

export default TeacherCard;
