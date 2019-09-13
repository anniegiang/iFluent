import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import teacherDetailsReducer from './teacher_details_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  teacherDetails: teacherDetailsReducer
});


export default entitiesReducer;