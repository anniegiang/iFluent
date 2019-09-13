import { RECEIVE_ALL_TEACHER_DETAILS, RECEIVE_TEACHER_DETAIL } from '../actions/teacher_detail_actions';

const teacherDetailsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_TEACHER_DETAILS:
            return newState[action.teacherDetail.id] = action.teacherDetail;
        case RECEIVE_TEACHER_DETAIL:
            return action.teacherDetail;
        default:
            return state;
    }
};

export default teacherDetailsReducer;