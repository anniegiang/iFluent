import * as APIUtil from '../util/languages_api_util';

export const RECEIVE_ALL_LANGUAGES = "RECEIVE_ALL_LANGUAGES";

const receiveAllLanguages = languages => ({
    type: RECEIVE_ALL_LANGUAGES,
    languages
});

// thunk
export const fetchAllLanguages = () => dispatch => {
    return APIUtil.fetchAllLanguages()
        .then(languages => dispatch(receiveAllLanguages(languages)))
};