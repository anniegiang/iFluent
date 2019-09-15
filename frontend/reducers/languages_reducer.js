import RECEIVE_ALL_LANGUAGES from '../actions/language_actions';

const languagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LANGUAGES:
            return action.languages
        default:
            return state;
    }
};

export default languagesReducer;