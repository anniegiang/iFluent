import * as APIUtil from "../util/open_time_slots_api_util";

export const RECEIVE_ALL_OPEN_TIME_SLOTS = "RECEIVE_ALL_OPEN_TIME_SLOTS";

const receiveAllOpenTimeSlots = openTimeSlots => ({
  type: RECEIVE_ALL_OPEN_TIME_SLOTS,
  openTimeSlots
});

// thunk
export const fetchAllOpenTimeSlots = teacherId => dispatch => {
  return APIUtil.fetchAllOpenTimeSlots(teacherId).then(openTimeSlots =>
    dispatch(receiveAllOpenTimeSlots(openTimeSlots))
  );
};
