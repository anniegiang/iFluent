import { RECEIVE_ALL_LANGUAGES, RECEIVE_LANGUAGE } from '../actions/language_actions';

const languagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LANGUAGES:
            return action.languages;
        case RECEIVE_LANGUAGE:
            return action.language;
        default:
            return state;
    }
};

export default languagesReducer;