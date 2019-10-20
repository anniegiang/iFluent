import { connect } from "react-redux";
import React from "react";
import LessonItem from "./lesson_item";
import { withRouter } from "react-router-dom";

import {
  fetchLesson,
  fetchAllLessonsByTeacher
} from "../../actions/lesson_actions";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  return {
    lesson: Object.values(state.entities.lessons)[0]
  };
};

const mdp = dispatch => {
  return {
    fetchLesson: id => dispatch(fetchLesson(id)),
    fetchAllLessonsByTeacher: teacherId =>
      dispatch(fetchAllLessonsByTeacher(teacherId)),
    closeLesson: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(LessonItem)
);
