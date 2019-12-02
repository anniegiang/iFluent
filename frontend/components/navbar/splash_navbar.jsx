import React from "react";
import { Link } from "react-router-dom";

class SplashNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (this.props.location.pathname.includes("/teachers")) {
      return;
    }

    let nav = document.querySelector(".splash-nav-container");
    if (window.scrollY > 70) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
  render() {
    return (
      <nav className="splash-nav-container">
        <a href="/" className="splash-logo">
          <img src={window.logo} alt="splash-logo" />
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
