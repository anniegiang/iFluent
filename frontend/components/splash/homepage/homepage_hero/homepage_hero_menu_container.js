import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomePageHeroMenu from "./homepage_hero_menu";
import { fetchAllLanguages } from "/Users/Annie/Desktop/app-academy/ifluent/frontend/actions/language_actions.js";
import { fetchAllTeachersByLanguage } from "/Users/Annie/Desktop/app-academy/ifluent/frontend/actions/teacher_actions.js";

const msp = state => {
  return {
    languages: Object.values(state.entities.languages)
  };
};

const mdp = dispatch => {
  return {
    fetchAllLanguages: () => dispatch(fetchAllLanguages()),
    fetchAllTeachersByLanguage: languageName =>
      dispatch(fetchAllTeachersByLanguage(languageName))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(HomePageHeroMenu)
);
