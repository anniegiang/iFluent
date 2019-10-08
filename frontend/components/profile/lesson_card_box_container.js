import { connect } from "react-redux";
import React from "react";
import LessonCardBox from "./lesson_card_box";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchLesson } from "../../actions/lesson_actions";

const msp = state => {
  return {};
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openLesson: () => dispatch(openModal("lessonItem")),
    fetchLesson: id => dispatch(fetchLesson(id))
  };
};

export default connect(
  null,
  mdp
)(LessonCardBox);
