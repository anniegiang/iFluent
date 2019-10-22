import { connect } from 'react-redux';
import TeacherProfile from './teacher_profile';
import { fetchTeacher } from '../../actions/teacher_actions';
import { fetchAllLessonsByTeacher } from '../../actions/lesson_actions';
import { fetchAllOpenTimeSlots } from '../../actions/open_time_slot_actions';

const msp = (state, ownProps) => {
  return {
    teacher: state.entities.teachers[ownProps.match.params.teacherId],
    lessons: Object.values(state.entities.lessons),
    openTimeSlots: Object.values(state.entities.openTimeSlots)
  }
};

const mdp = dispatch => {
  return {
    fetchTeacher: id => dispatch(fetchTeacher(id)),
    fetchLessons: teacherId => dispatch(fetchAllLessonsByTeacher(teacherId)),
    fetchOpenTimeSlots: teacherId => dispatch(fetchAllOpenTimeSlots(teacherId))
  }
};

export default connect(
  msp,
  mdp
)(TeacherProfile)
