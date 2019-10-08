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

  formatPrice(num) {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
  }

  minPrice() {
    const { lessonItems } = this.props.lesson;
    let min = Infinity;
    lessonItems.forEach(item => {
      if (item.price <= min) min = item.price;
    });

    if (lessonItems.length === 1) {
      return this.formatPrice(min);
    } else {
      return `${this.formatPrice(min)}+`;
    }
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
            <span>USD {this.minPrice()}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default LessonCardBox;
