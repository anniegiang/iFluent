import React from "react";
import TeacherCardLeft from "./search_teacher_card_left";
import TeacherCardRight from "./search_teacher_card_right";

class TeacherCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.currentTarget.id;
    this.props.history.push(`/teachers/${id}/${this.props.language}`);
  }

  render() {
    return (
      <div
        id={this.props.teacher.id}
        className="search-teacher-card_container"
        onClick={this.handleClick}
      >
        <TeacherCardLeft teacher={this.props.teacher} />
        <TeacherCardRight teacher={this.props.teacher} />
      </div>
    );
  }
}

export default TeacherCard;
