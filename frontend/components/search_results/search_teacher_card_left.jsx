import React from "react";

const TeacherCardLeft = props => {
  const {
    id,
    teacher_id,
    country,
    about_me,
    title,
    video_url,
    hourly_rate,
    trial_rate,
    name,
    profilePicture
  } = props.teacher;

  return (
    <div className="search-teacher-card_left">
      <div className="search-teacher-card_left__top">
        <div className="search-teacher-card_left__top__avatar">
          <div class="avatar avatar-big avatar-shadow avatar-placeholder">
            <img src={profilePicture} alt="Avatar" />
          </div>
        </div>
      </div>
      <div className="search-teacher-card_left__bottom"></div>
    </div>
  );
};

export default TeacherCardLeft;
