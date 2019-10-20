import { connect } from "react-redux";
import BookingForm from "./booking_form";
import { fetchTeacher } from "../../actions/teacher_actions";
import { fetchAllLessonsByTeacher } from "../../actions/lesson_actions";
import {
  fetchAllOpenTimeSlots,
  deleteOpenTimeSlot
} from "../../actions/open_time_slot_actions";
import { createBooking } from "../../actions/booking_actions";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    teacher: state.entities.teachers[ownProps.match.params.teacherId],
    lessons: Object.values(state.entities.lessons),
    openTimeSlots: Object.values(state.entities.openTimeSlots)
  };
};

const mdp = dispatch => {
  return {
    fetchTeacher: id => dispatch(fetchTeacher(id)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchLessons: teacherId => dispatch(fetchAllLessonsByTeacher(teacherId)),
    fetchAllOpenTimeSlots: teacherId =>
      dispatch(fetchAllOpenTimeSlots(teacherId)),
    deleteOpenTimeSlot: openTimeSlotId =>
      dispatch(deleteOpenTimeSlot(openTimeSlotId))
  };
};

export default connect(
  msp,
  mdp
)(BookingForm);
