import { connect } from 'react-redux';
import SearchDropDown from './search_drop_down';
import { fetchAllLanguages } from '../../actions/language_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = state => ({
    languages: state.entities.languages
});

const mdp = dispatch => ({
    fetchAllLanguages: () => dispatch(fetchAllLanguages()),
    closeModal: () => dispatch(closeModal())
});


export default connect(msp, mdp)(SearchDropDown);