import { RECEIVE_ALL_OPEN_TIME_SLOTS } from "../actions/open_time_slot_actions";

const openTimeSlotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_OPEN_TIME_SLOTS:
      return action.openTimeSlots;
    default:
      return state;
  }
};

export default openTimeSlotsReducer;
