import { RECEIVE_ALL_TEACHERS, RECEIVE_TEACHER } from '../actions/teacher_actions';

const teachersReducer = {state = {}, action} {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_TEACHERS:
            return action.teachers;
        case RECEIVE_TEACHER:
            return action.teacher;
        default:
            return state;
    }
};

export default teachersReducer;