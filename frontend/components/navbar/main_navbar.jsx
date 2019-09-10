import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';


class MainNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.displayNavBar = this.displayNavBar.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  displayNavBar() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className="main-nav"> 
          <div className="left-nav">
            <a><span>Languages</span></a>
          </div>
          <div className="right-nav">
            <a><span>Find a Teacher</span></a>
            <a onClick={logout}><span>Logout</span></a>
          </div>
        </div>
      )
    } else {
      return (
        <div className="main-nav">
          <div className="right-nav">
            <a onClick={this.demoLogin}><span>Demo</span></a>
            <Link to="/login"><span>Log In</span></Link>
            <Link to="/signup"><span>Sign Up</span></Link>
          </div>
        </div>
      )
    }
  }

  demoLogin(e) {
     e.preventDefault();
     this.props.login({email: "guest@aa.io", password: "password"})
      .then(() => this.props.history.push("/"))
  }


  render() {
    return (
      <div className="navbar-container">
        <img 
          src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_white.72e72948.svg" 
          className="logo"
          />
        {this.displayNavBar()}
      </div>
    )
    
  }
};

export default MainNavBar;