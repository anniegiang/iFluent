import React from "react";
import LessonCardBoxContainer from "./lesson_card_box_container";

const TeacherLessonsCard = props => {
  return (
    <div className="LessonsCard teacherCard-box LessonsCard-desktop">
      <div className="teacherCard-bar">
        <h2 className="cardTitle LessonsCard-title">
          <span className="cardTitle-flexStart">
            <span>Lessons</span>
          </span>
        </h2>
        <div className="lessonCard-box">
          {props.lessons.map(lesson => (
            <LessonCardBoxContainer
              lessonId={lesson.id}
              key={lesson.id}
              lesson={lesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeacherLessonsCard;
