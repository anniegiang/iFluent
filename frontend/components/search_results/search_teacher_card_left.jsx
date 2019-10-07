import React from "react";

const TeacherCardLeft = props => {
  const {
    id,
    teacherId,
    country,
    aboutMe,
    title,
    videoUrl,
    hourlyRate,
    trialRate,
    name,
    profilePictureUrl,
    languageTaught,
    languageSpoken,
    totalLessons
  } = props.teacher;

  const formatPrice = num => {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
  };

  return (
    <div className="search-teacher-card_left">
      <div className="search-teacher-card_left__top">
        <div className="search-teacher-card_left__top__avatar">
          <div className="avatar avatar-big avatar-shadow avatar-placeholder">
            <img src={profilePictureUrl} alt="Avatar" />
          </div>
        </div>
        <div className="search-teacher-card_left__top__info">
          <h1>{name}</h1>
          <p>{title}</p>
          <div className="search-teacher-card-divider"></div>
          <p>Teaches</p>
          <h2>{languageTaught}</h2>
        </div>
      </div>
      <div className="search-teacher-card_left__bottom">
        <div className="search-teacher-card_left__bottom__rating">
          <div className="teacher-card-stars">
            <div className="stars-box">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
            </div>
          </div>
          <p>
            <span>{totalLessons} LESSONS</span>
          </p>
        </div>
        <div className="search-teacher-card_left__bottom__info">
          <p>
            <span>Also speaks</span>
          </p>
          <h2>{languageSpoken}</h2>
          <div class="teacher-card-rate">
            <div class="teacher-card-hourly">
              <p>
                <span>Hourly Rate From</span>
              </p>
              <h2 class="teacher-price-rate">
                <span>USD {formatPrice(hourlyRate)}</span>
              </h2>
            </div>
            <div class="teacher-card-trial">
              <p>
                <span>Trial</span>
              </p>
              <h2 class="teacher-price-rate">
                <span>USD {formatPrice(trialRate)}</span>
              </h2>
            </div>
          </div>
        </div>
        <i class="teacher-card-favorite"></i>
      </div>
    </div>
  );
};

export default TeacherCardLeft;