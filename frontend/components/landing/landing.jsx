import React from "react";
import LandingNavBarContainer from "../navbar/landing_navbar_container";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <LandingNavBarContainer />
        <h1>Landing</h1>
      </div>
    );
  }
}

export default Landing;
