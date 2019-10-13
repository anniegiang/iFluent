import SearchResults from "./search_results";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllTeachersByLanguage } from "../../actions/teacher_actions.js";
// import { fetchAllTeachersByLanguage } from "/Users/Annie/Desktop/app-academy/ifluent/frontend/actions/teacher_actions.js";

const msp = state => {
  return {
    teachers: Object.values(state.entities.teachers)
  };
};

const mdp = dispatch => {
  return {
    fetchAllTeachersByLanguage: languageName =>
      dispatch(fetchAllTeachersByLanguage(languageName))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(SearchResults)
);
