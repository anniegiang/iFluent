import {
  RECEIVE_ALL_OPEN_TIME_SLOTS,
  DELETE_OPEN_TIME_SLOT
} from '../actions/open_time_slot_actions';

const openTimeSlotsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_OPEN_TIME_SLOTS:
      return action.openTimeSlots
    case DELETE_OPEN_TIME_SLOT:
      newState = Object.assign({}, state)
      delete newState[action.openTimeSlotId]
      return newState
    default:
      return state
  }
}

export default openTimeSlotsReducer
