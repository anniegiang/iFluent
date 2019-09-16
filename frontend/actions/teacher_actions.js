import * as APIUtil from '../util/teachers_api_util';

export const RECEIVE_ALL_TEACHERS = "RECEIVE_ALL_TEACHERS";
export const RECEIVE_TEACHER = "RECEIVE_TEACHER";

const receiveAllTeachers = teachers => ({
    type: 3,
    teachers
});

const receiveTeacher = teacher => ({
    type: RECEIVE_TEACHER,
    teacher
});

// thunk

export const fetchAllTeachers = () => dispatch => {
    return APIUtil.fetchAllTeachers()
        .then(teachers => dispatch(receiveAllTeachers(teachers)))
};

export const fetchTeacher = id => dispatch => {
    return APIUtil.fetchTeacher(id)
        .then(teacher => dispatch(receiveTeacher(teacher)))
};
