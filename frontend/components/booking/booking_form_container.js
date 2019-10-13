import { connect } from "react-redux";
import BookingForm from "./booking_form";

const msp = state => {
  return {};
};

const mdp = dispatch => {
  return {};
};

export default connect(
  msp,
  mdp
)(BookingForm);
