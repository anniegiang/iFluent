import { connect } from 'react-redux';
import React from 'react';
import LessonItem from './lesson_item';
import { fetchLesson } from '../../actions/lesson_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        lesson: state.entities.lessons[Object.values(state.entities.lessons)[0].id],
    }
}

const mdp = dispatch => {
    return {
        fetchLesson: id => dispatch(fetchLesson(id)),
        closeLesson: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(LessonItem);


