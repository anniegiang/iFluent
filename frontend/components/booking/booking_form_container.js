import { connect } from "react-redux";
import BookingForm from "./booking_form";
import { fetchTeacher } from "../../actions/teacher_actions";
import { fetchAllLessonsByTeacher } from "../../actions/lesson_actions";
import { fetchAllOpenTimeSlots } from "../../actions/open_time_slot_actions";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    teacher: state.entities.teachers[ownProps.match.params.teacherId],
    lessons: Object.values(state.entities.lessons),
    fetchAllOpenTimeSlots: Object.values(state.entities.openTimeSlots)
  };
};

const mdp = dispatch => {
  return {
    fetchTeacher: id => dispatch(fetchTeacher(id)),
    fetchLessons: teacherId => dispatch(fetchAllLessonsByTeacher(teacherId)),
    fetchAllOpenTimeSlots: teacherId =>
      dispatch(fetchAllOpenTimeSlots(teacherId))
  };
};

export default connect(
  msp,
  mdp
)(BookingForm);
