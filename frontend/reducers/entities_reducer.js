import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import teachersReducer from "./teachers_reducer";
import languagesReducer from "./languages_reducer";
import lessonsReducer from "./lessons_reducer";
import bookingsReducer from "./bookings_reducer";
import timeSlotsReducer from "./time_slots_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  teachers: teachersReducer,
  languages: languagesReducer,
  lessons: lessonsReducer,
  bookings: bookingsReducer,
  timeSlots: timeSlotsReducer
});

export default entitiesReducer;
