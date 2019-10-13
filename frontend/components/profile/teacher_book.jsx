import React from "react";
import { Link } from "react-router-dom";

class TeacherBook extends React.Component {
  constructor(props) {
    super(props);

    this.bookingFormClick = this.bookingFormClick.bind(this);
  }

  render() {
    const formatPrice = num => {
      return parseFloat(Math.round(num * 100) / 100).toFixed(2);
    };
    return (
      <div className="teacher-book">
        <div className="bookCards">
          <div className="bookCard-box">
            <div className="bookCard">
              <div className="bookCard-left">
                <div className="bookCard-title">
                  <span>Trial Lesson</span>
                </div>
              </div>

              <div className="bookCard-right">
                <div className="bookCard-priceNew">
                  <span>USD {formatPrice(this.props.teacher.trialRate)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bookCard-hr"></div>
          <div className="bookCard-box">
            <div className="bookCard">
              <div className="bookCard-left">
                <div className="bookCard-title">
                  <span>Lessons</span>
                </div>
              </div>

              <div className="bookCard-right">
                <div className="bookCard-priceNew">
                  <span>USD {formatPrice(this.props.teacher.hourlyRate)}</span>
                </div>
              </div>
              <div className="bookCard-price-from">
                <span>FROM</span>
              </div>
            </div>
          </div>
          <div className="bookCard-hr"></div>
          <Link to="/booking">
            <button
              id="schedule-lesson"
              type="button"
              className="teacher-right-booknow btn btn-standard btn-main btn-gradient"
            >
              <span>BOOK NOW</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default TeacherBook;
