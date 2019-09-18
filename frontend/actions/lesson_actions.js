import * as APIUtil from '../util/lessons_api_util';

export const RECEIVE_ALL_LESSONS = "RECEIVE_ALL_LESSONS";
export const RECEIVE_LESSON = "RECEIVE_LESSON";

const receiveAllLessons= lessons => ({
    type: RECEIVE_ALL_LESSONS,
    lessons
});

const receieveLesson = lesson => ({
    type: RECEIVE_LESSON,
    lesson
});

// thunk

export const fetchAllLessonsByTeacher = teacherId => dispatch => {
    return APIUtil.fetchAllLessonsByTeacher(teacherId)
        .then(lessons => dispatch(receiveAllLessons(lessons)))
};

export const fetchLesson = id => dispatch => {
    return APIUtil.fetchLesson(id)
        .then(lesson => dispatch(receieveLesson(lesson)))
};