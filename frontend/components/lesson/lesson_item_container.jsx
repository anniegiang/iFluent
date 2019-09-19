import { connect } from 'react-redux';
import React from 'react';
import LessonItem from './lesson_item';
import { fetchLesson } from '../../actions/lesson_actions';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    debugger
    return {
        lesson: state.entities.lessons[Object.values(state.entities.lessons)[0].id],
    }
}

const mdp = dispatch => {
    return {
        fetchLesson: id => dispatch(fetchLesson(id))
    }
}

export default withRouter(connect(msp, mdp)(LessonItem));


