import { RECEIVE_ALL_TIME_SLOTS } from "../actions/time_slot_actions";

const timeSlotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TIME_SLOTS:
      return action.timeSlots;
    default:
      return state;
  }
};

export default timeSlotsReducer;
