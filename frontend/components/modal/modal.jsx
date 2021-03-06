import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import LessonItemContainer from "../profile/lesson_item_container";
import SearchDropDownContainer from "../search_results/search_drop_down_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "lessonItem":
      component = <LessonItemContainer />;
      break;
    case "searchDropDown":
      component = <SearchDropDownContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
