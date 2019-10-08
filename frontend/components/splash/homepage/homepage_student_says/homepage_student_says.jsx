import React from "react";
import StudentSaysSlider from "./student_says_slider";

const HomePageStudentSays = props => {
  return (
    <div className="homepage-students-say">
      <h1>
        <span>
          Over <div>5,000,000</div> learners
        </span>
      </h1>
      <StudentSaysSlider />
      {/* <h1>Student Reviews Carousel here</h1> */}
    </div>
  );
};

export default HomePageStudentSays;
