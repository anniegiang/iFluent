import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER, RECEIVE_LESSONS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_LESSONS:
      return action.enrolledLessons
    default:
      return state;
  }
};

export default usersReducer;