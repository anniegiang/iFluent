import { connect } from 'react-redux';
import TeacherProfile from './teacher_profile';
import { fetchTeacher } from '../../actions/teacher_actions';

const msp = (state, ownProps) => {
    return {
        teacher: state.entities.teachers[ownProps.match.params.teacherId]
    }
};

const mdp = dispatch => {
    return {
        fetchTeacher: id => dispatch(fetchTeacher(id))
    }
};

export default connect(msp, mdp)(TeacherProfile);