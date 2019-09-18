import { RECEIVE_ALL_LESSONS, RECEIVE_LESSON } from '../actions/lesson_actions';

const lessonsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LESSONS:
            return action.lessons;
        case RECEIVE_LESSON:
            return action.lesson;
        default:
            return state;
    }
}

export default lessonsReducer;