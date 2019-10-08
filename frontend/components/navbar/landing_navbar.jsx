import React from "react";

class LandingNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.renderAuthLinks = this.renderAuthLinks.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  renderAuthLinks() {
    if (this.props.currentUser !== undefined) {
      return <button onClick={this.handleLogout}>Log Out</button>;
    } else {
      return (
        <React.Fragment>
          <button onClick={this.props.loginModal}>Log in</button>
          <button onClick={this.props.signupModal}>Sign up</button>
        </React.Fragment>
      );
    }
  }

  handleLogout(e) {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <nav className="landing-nav-container">
        <a href="#/dashboard" className="landing-logo">
          <img
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg"
            alt="landing-logo"
          />
        </a>
        <div className="landing-nav-links">
          <a id="find-a-teacher" href="#/teachers/English">
            Find a Teacher
          </a>
          {this.renderAuthLinks()}
        </div>
      </nav>
    );
  }
}

export default LandingNavBar;
