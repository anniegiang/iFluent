import { RECEIVE_ALL_TEACHER_DETAILS, RECEIVE_TEACHER_DETAIL } from '../actions/teacher_detail_actions';

const teacherDetailsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_TEACHER_DETAILS:
            return action.teacherDetail;
        case RECEIVE_TEACHER_DETAIL:
            const newState= { [action.teacherDetail.id]: action.teacherDetail };
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};

export default teacherDetailsReducer;