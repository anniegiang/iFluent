import React from "react";

class LandingNavBar extends React.Component {
  render() {
    return (
      <nav className="landing-nav-container">
        <a href="/dashboard" className="landing-logo">
          <img
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg"
            alt="landing-logo"
          />
        </a>
        <div className="landing-nav-links">
          <button onClick={this.props.logout}>Find a Teacher</button>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </nav>
    );
  }
}

export default LandingNavBar;
