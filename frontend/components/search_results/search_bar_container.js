import { connect } from "react-redux";
import {
  fetchTeacher,
  fetchAllTeachersByLanguage
} from "../../actions/teacher_actions";
import SearchBar from "./search_bar";
import { openModal } from "../../actions/modal_actions";

const msp = state => {
  return {
    teachers: Object.values(state.entities.teachers)
  };
};

const mdp = dispatch => {
  return {
    fetchTeacher: id => dispatch(fetchTeacher(id)),
    fetchAllTeachersByLanguage: languageName =>
      dispatch(fetchAllTeachersByLanguage(languageName)),
    openDropDown: () => dispatch(openModal("searchDropDown"))
  };
};

export default connect(
  msp,
  mdp
)(SearchBar);
