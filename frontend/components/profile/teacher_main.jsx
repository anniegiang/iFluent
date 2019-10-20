import React from "react";

import TeacherInfoCard from "./teacher_info_card";
import TeacherLessonsCard from "./teacher_lessons_card";
// import TeacherStatisticsCard from "./teacher_statistics_card";
// import TeacherReview from "./teacher_review";

const TeacherMain = props => {
  return (
    <div className="Teacher-main">
      <TeacherInfoCard teacher={props.teacher} />
      <TeacherLessonsCard lessons={props.lessons} teacher={props.teacher} />
      {/* <TeacherStatisticsCard teacher={props.teacher} />
                <TeacherReview teacher={props.teacher} /> */}
    </div>
  );
};

export default TeacherMain;
