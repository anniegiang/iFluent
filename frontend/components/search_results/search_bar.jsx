import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="teach-language" style={{ top: "0px" }}>
        <p className="teach-language-choice">
          <span onClick={this.props.openDropDown} id="language-to-learn">
            {this.props.match.params.languageName || "Languages"}
            <span className="arrow-down"></span>
          </span>
        </p>
      </div>
    );
  }
}

export default withRouter(SearchBar);
