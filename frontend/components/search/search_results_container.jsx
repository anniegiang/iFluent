import { connect } from 'react-redux';
import { fetchTeacher, fetchAllTeachersByLanguage } from '../../actions/teacher_actions';
import SearchResults from './search_results';

const msp = state => {
    return {
        teachers: Object.values(state.entities.teachers)
    }
}

const mdp = dispatch => {
    return {
        fetchTeacher: id => dispatch(fetchTeacher(id)),
        fetchAllTeachersByLanguage: languageName => dispatch(fetchAllTeachersByLanguage(languageName))
    }
}


export default connect(msp, mdp)(SearchResults);