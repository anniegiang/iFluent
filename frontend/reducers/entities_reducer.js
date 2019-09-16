import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import teachersReducer from './teachers_reducer';
import languagesReducer from './languages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  teachers: teachersReducer,
  languages: languagesReducer
});


export default entitiesReducer;