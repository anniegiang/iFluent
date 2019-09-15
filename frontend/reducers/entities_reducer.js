import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import languagesReducer from './languages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  languages: languagesReducer
});


export default entitiesReducer;