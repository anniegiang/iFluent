import * as APIUtil from "../util/time_slots_api_util";

export const RECEIVE_ALL_TIME_SLOTS = "RECEIVE_ALL_TIME_SLOTS";

const receiveAllTimeSlots = timeSlots => ({
  type: RECEIVE_ALL_TIME_SLOTS,
  timeSlots
});

// thunk
export const fetchAllTimeSlots = () => dispatch => {
  return APIUtil.fetchAllTimeSlots().then(time_slots =>
    dispatch(receiveAllTimeSlots(time_slots))
  );
};
