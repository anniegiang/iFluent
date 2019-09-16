import { connect } from 'react-redux';
import { fetchTeacher } from '../../actions/teacher_actions';
import SearchResults from './search_results';

const msp = state => {
    return {
        teachers: Object.values(state.entities.teachers)
    }
}

const mdp = dispatch => {
    return {
        fetchTeacher: id => dispatch(fetchTeacher(id))
    }
}


export default connect(msp, mdp)(SearchResults);