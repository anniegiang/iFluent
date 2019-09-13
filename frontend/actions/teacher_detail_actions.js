import * as APIUtil from '../util/teacher_details';

export const RECEIVE_ALL_TEACHER_DETAILS = "RECEIVE_ALL_TEACHER_DETAILS";
export const RECEIVE_TEACHER_DETAIL = "RECEIVE_TEACHER_DETAIL";

const receiveAllTeacherDetails = () => ({
    type: RECEIVE_ALL_TEACHER_DETAILS
});

const receiveTeacherDetail = teacherDetail => ({
    type: RECEIVE_TEACHER_DETAIL,
    teacherDetail 
});

// thunk action creators

export const fetchAllTeacherDetails = () => dispatch => (
    APIUtil.fetchAllTeacherDetails()
        .then(teacherDetails => dispatch(receiveAllTeacherDetails(teacherDetails)))
);

export const fetchTeacherDetails = id => dispatch => (
    APIUtil.fetchTeacherDetail(id)
        .then(teacherDetail => dispatch(receiveTeacherDetail(teacherDetail)))
);