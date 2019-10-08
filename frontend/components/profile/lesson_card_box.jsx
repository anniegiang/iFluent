import React from "react";

class LessonCardBox extends React.Component {
  constructor(props) {
    super(props);
    this.openLesson = this.openLesson.bind(this);
  }

  openLesson(e) {
    this.props
      .fetchLesson(this.props.lessonId)
      .then(() => this.props.openLesson());
  }

  render() {
    return (
      <div onClick={this.openLesson} className="lessonCard-bar">
        <div className="lessonCard-left">
          <div className="lessonCard-title">{this.props.lesson.title}</div>
          <div className="blackbar"></div>
          <div className="lessonCard-content">
            <span className="lesson-count-lowercase">
              {this.props.lesson.lessonsTaught}&nbsp;<span>Lessons taught</span>
            </span>
          </div>
        </div>
        <div className="lessonCard-right">
          <span className="lessonCard-price-green">
            <span>USD {this.props.lesson.price}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default LessonCardBox;
