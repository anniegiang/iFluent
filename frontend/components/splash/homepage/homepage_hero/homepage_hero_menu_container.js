import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomePageHeroMenu from "./homepage_hero_menu";
import { fetchAllLanguages } from "../../../../actions/language_actions.js";
// import { fetchAllLanguages } from "/Users/Annie/Desktop/app-academy/ifluent/frontend/actions/language_actions.js";

const msp = state => {
  return {
    languages: Object.values(state.entities.languages)
  };
};

const mdp = dispatch => {
  return {
    fetchAllLanguages: () => dispatch(fetchAllLanguages())
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(HomePageHeroMenu)
);
