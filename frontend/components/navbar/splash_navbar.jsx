import React from "react";
import { Link } from "react-router-dom";

class SplashNavBar extends React.Component {
  render() {
    return (
      <nav className="splash-nav-container">
        <a href="/" className="splash-logo">
          <img
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_white.72e72948.svg"
            alt="splash-logo"
          />
        </a>
        <div className="splash-nav-links">
          <button onClick={this.props.openModalLogin}>Log In</button>
          <button onClick={this.props.openModalSignup}>Sign Up</button>
        </div>
      </nav>
    );
  }
}

export default SplashNavBar;
