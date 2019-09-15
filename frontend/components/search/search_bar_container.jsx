import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchAllLanguages } from '../../actions/language_actions';

const msp = state => {
    return {
        languages: Object.values(state.entities.languages)
    }
}

const mdp = dispatch => {
    return {
        fetchAllLanguages: () => dispatch(fetchAllLanguages())
    }
}

export default connect(msp, mdp)(SearchBar); 