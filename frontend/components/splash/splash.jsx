import React from "react";
import SplashNavBarContainer from "../navbar/splash_navbar_container";
import HomePage from "./homepage/homepage";

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-container">
        <SplashNavBarContainer />
        <HomePage />
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
        <h1>scrolling</h1>
      </div>
    );
  }
}

export default Splash;
