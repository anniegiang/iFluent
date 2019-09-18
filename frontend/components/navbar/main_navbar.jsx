import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';


class MainNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.displayNavBar = this.displayNavBar.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    if (this.props.location.pathname.includes("/teachers")) {
      return;
    }

    let nav = document.querySelector(".header-banner");
    if(window.scrollY > 70) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  displayNavBar() {
    const { currentUser } = this.props;
    const logoUrl = this.props.currentUser ? 
      "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg" :
      "https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_white.72e72948.svg";

    if (currentUser || this.props.location.pathname.includes("/teachers")) {
      return (
        <div className="header-banner main-nav">
          <a href="/"><img 
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg"
            className="logo"
            />
          </a>
          <div className="Header-button-wrap">
            <a id="find-teacher" href="#">
              <div className="Header-button">
                <span>Find a Teacher</span>
              </div>
            </a>
            <a id="messages" href="#">
              <div className="Header-button">
                <span>Messages</span>
              </div>
            </a>
            <a onClick={this.props.logoutUser}>
              <div className="Header-button">
                <span>Log out</span>
              </div>
            </a>
          </div>
        </div>
      )
    } else if (!currentUser || this.props.location.pathname.includes("/teachers")) {
      return (
        <div className="header-banner homepage-nav">
          <a href="/">
            <img 
              src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_white.72e72948.svg"
              className="logo"
            />
          </a>
          <div className="homepage-nav-btn">
            <button onClick={this.props.openModalLogin}>
              Log In
            </button>
            <button onClick={this.props.openModalSignup}>
              Sign Up
            </button>
            <button>
              Contact
            </button>
          </div>
        </div>
      )
    }
  }

  render() {
    
    return (
      <header className="header-container">
        {this.displayNavBar()}
      </header>
    )
  }
};

export default MainNavBar;