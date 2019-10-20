import * as APIUtil from "../util/open_time_slots_api_util";

export const RECEIVE_ALL_OPEN_TIME_SLOTS = "RECEIVE_ALL_OPEN_TIME_SLOTS";
export const DELETE_OPEN_TIME_SLOT = "DELETE_OPEN_TIME_SLOT";

const receiveAllOpenTimeSlots = openTimeSlots => ({
  type: RECEIVE_ALL_OPEN_TIME_SLOTS,
  openTimeSlots
});

const deleteOpenTimeSlot = openTimeSlotId => ({
  type: DELETE_OPEN_TIME_SLOT,
  openTimeSlotId
});

// thunk
export const fetchAllOpenTimeSlots = teacherId => dispatch => {
  return APIUtil.fetchAllOpenTimeSlots(teacherId).then(openTimeSlots =>
    dispatch(receiveAllOpenTimeSlots(openTimeSlots))
  );
};

export const deleteOpenTimeSlot = openTimeSlotId => dispatch => {
  return APIUtil.deleteOpenTimeSlot(openTimeSlotId).then(openTimeSlot =>
    dispatch(deleteOpenTimeSlot(openTimeSlot.id))
  );
};
