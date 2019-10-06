import { connect } from "react-redux";
import HomePageHeroMenu from "./homepage_hero_menu";
import { fetchAllLanguages } from "/Users/Annie/Desktop/app-academy/ifluent/frontend/actions/language_actions.js";

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

export default connect(
  msp,
  mdp
)(HomePageHeroMenu);
