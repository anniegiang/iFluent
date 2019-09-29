import React from "react";
import SplashNavBarContainer from "../navbar/splash_navbar_container";
import HomePage from "./homepage/homepage";

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-container">
        <SplashNavBarContainer />
        <HomePage />
      </div>
    );
  }
}

export default Splash;
