import * as APIUtil from "../util/languages_api_util";

export const RECEIVE_ALL_LANGUAGES = "RECEIVE_ALL_LANGUAGES";
export const RECEIVE_LANGUAGE = "RECEIVE_LANGUAGE";

const receiveAllLanguages = languages => ({
  type: RECEIVE_ALL_LANGUAGES,
  languages
});

const receiveLanguage = language => ({
  type: RECEIVE_LANGUAGE,
  language
});

// thunk
export const fetchAllLanguages = () => dispatch => {
  return APIUtil.fetchAllLanguages().then(languages =>
    dispatch(receiveAllLanguages(languages))
  );
};

export const fetchLanguage = id => dispatch => {
  return APIUtil.fetchLanguage(id).then(language =>
    dispatch(receiveLanguage(language))
  );
};
