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
    let nav = document.querySelector(".navbar-container");
    if(window.scrollY > 70) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  displayNavBar() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className="main-nav-logged-in"> 
          <div className="left-nav">
            <button><span>Languages</span></button>
          </div>
          <div className="right-nav">
            <button><span>Find a Teacher</span></button>
            <button onClick={this.props.logoutUser}><span>Logout</span></button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="main-nav">
          <div className="right-nav">
            <button onClick={this.props.openModalLogin}>
              Log In
            </button>
            <button onClick={this.props.openModalSignup}>
              Sign Up
            </button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <a href="/"><img 
          // src="assets/logo_white.svg"
          src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_white.72e72948.svg"
          className="logo"
          /></a>
        {this.displayNavBar()}
      </div>
    )
    
  }
};

export default MainNavBar;