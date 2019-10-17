import { connect } from "react-redux";
import BookingForm from "./booking_form";
import { fetchTeacher } from "../../actions/teacher_actions";
import { fetchAllLessonsByTeacher } from "../../actions/lesson_actions";
import { fetchAllTimeSlots } from "../../actions/time_slot_actions";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    teacher: state.entities.teachers[ownProps.match.params.teacherId],
    lessons: Object.values(state.entities.lessons),
    timeSlots: Object.values(state.entities.timeSlots)
  };
};

const mdp = dispatch => {
  return {
    fetchTeacher: id => dispatch(fetchTeacher(id)),
    fetchLessons: teacherId => dispatch(fetchAllLessonsByTeacher(teacherId)),
    fetchAllTimeSlots: teacherId => dispatch(fetchAllTimeSlots(teacherId))
  };
};

export default connect(
  msp,
  mdp
)(BookingForm);
