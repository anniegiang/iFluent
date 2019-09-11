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
            <button onClick={this.demoLogin}><span>Demo</span></button>
            <button onClick={this.props.openModalSignup}>
              Signup
            </button>
            <button onClick={this.props.openModalLogin}>
              Log In
            </button>
            {/* <Link to="/login"><span>Log In</span></Link>
            <Link to="/signup"><span>Sign Up</span></Link> */}
          </div>
        </div>
      )
    }
  }

  demoLogin(e) {
     e.preventDefault();
     this.props.loginUser({email: "guest@aa.io", password: "password"})
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