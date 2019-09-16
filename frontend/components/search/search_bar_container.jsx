import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchAllLanguages } from '../../actions/language_actions';
import { fetchAllTeachersByLanguage } from '../../actions/teacher_actions';

const msp = state => {
    return {
        languages: Object.values(state.entities.languages)
    }
}

const mdp = dispatch => {
    return {
        fetchAllLanguages: () => dispatch(fetchAllLanguages()),
        fetchAllTeachersByLanguage: languageName => dispatch(fetchAllTeachersByLanguage(languageName))
    }
}

export default connect(msp, mdp)(SearchBar); 