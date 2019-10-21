import React from "react";
import { withRouter } from "react-router-dom";
class TeacherCardLeft extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.currentTarget.id;
    this.props.history.push(
      `/teachers/${this.props.teacher.id}/${this.props.language}`
    );
  }

  formatPrice(num) {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
  }
  render() {
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
    } = this.props.teacher;
    return (
      <div onClick={this.handleClick} className="search-teacher-card_left">
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
            <div className="teacher-card-rate">
              <div className="teacher-card-hourly">
                <p>
                  <span>Hourly Rate From</span>
                </p>
                <h2 className="teacher-price-rate">
                  <span>USD {this.formatPrice(hourlyRate)}</span>
                </h2>
              </div>
              <div className="teacher-card-trial">
                <p>
                  <span>Trial</span>
                </p>
                <h2 className="teacher-price-rate">
                  <span>USD {this.formatPrice(trialRate)}</span>
                </h2>
              </div>
            </div>
          </div>
          {/* <i className="teacher-card-favorite"></i> */}
        </div>
      </div>
    );
  }
}

export default withRouter(TeacherCardLeft);
