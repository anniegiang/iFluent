import { connect } from 'react-redux';
import TeacherProfile from './teacher_profile';
import { fetchTeacher } from '../../util/teachers_api_util';

const msp = state => {
    return {

    }
};

const mdp = dispatch => {
    return {

    }
};

export default connect(msp, mdp)(TeacherProfile);