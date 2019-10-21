import React from "react";

const TeacherInfoCard = props => {
  const randStudents = Math.floor(Math.random() * Math.floor(200));
  const {
    country,
    aboutMe,
    title,
    videoUrl,
    hourlyRate,
    trialRate,
    name,
    profilePictureUrl,
    languageSpoken,
    languageTaught,
    totalLessons
  } = props.teacher;
  return (
    <div className="TeacherInfoCard teacherCard-box1 TeacherInfoCard-desktop">
      <div className="Video">
        <iframe
          src={videoUrl}
          frameBorder="0"
          width="100%"
          height="422"
          title="video"
          allowFullScreen=""
        ></iframe>
      </div>

      <div className="teacherCard">
        <div className="teacherCard-left">
          <div className="avatar avatar-big avatar-shadow avatar-placeholder">
            <img src={profilePictureUrl} alt="Avatar" />
          </div>
          <div className="Online">
            <span>Online</span>
          </div>
        </div>
        <div className="teacherCard-body">
          <div className="teacherCard-part1">
            <div className="teacherCard-middle">
              <div className="teacherCard-name">{name}</div>
              <div className="teacherCard-personalInfo">
                <div>
                  <span>{props.teacher.title}</span>
                </div>
                <div>
                  <span>From </span>
                  <span>{country}</span>
                </div>
                <div>
                  <span>Living in </span>
                  <span>{country}</span>
                </div>
              </div>
              <div className="redbar"></div>
            </div>
            <div className="teacherCard-right">
              <div className="teacherCard-right-body">
                <div className="teacherCard-stars">
                  <div className="stars-box">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <span className="number">5.0</span>
                  </div>
                </div>
                <div>
                  <span>{totalLessons} LESSONS TAUGHT</span>
                </div>
                <div>
                  <span>{randStudents} STUDENTS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="teacherCard-part2">
            <div className="teacherCard-teaches">
              <div className="teacherCard-teaches-title">
                <span>Teaches</span>
              </div>
              <div className="teacherCard-teaches-languages">
                <div>
                  <span className="language">
                    <span>{languageTaught}</span>
                  </span>
                  <span className="tooltip-container-box" gap="5">
                    <span className="tooltip-container" placement="bottom">
                      <span className="tooltip-reference">
                        <div>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="teacherCard-teaches">
              <div className="teacherCard-teaches-title">
                <span>Also Speaks</span>
              </div>
              <div className="teacherCard-teaches-languages">
                <div>
                  <span className="language">
                    <span>{languageSpoken}</span>
                  </span>
                  <span className="tooltip-container-box" gap="5">
                    <span className="tooltip-container" placement="bottom">
                      <span className="tooltip-reference">
                        <div>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                          <span className="level level-color-2 level-color-3"></span>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutMe">
        <div>
          <h2 className="cardTitle">
            <span>About Me</span>
          </h2>
          <div className="aboutMe-introduction">{aboutMe}</div>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfoCard;
