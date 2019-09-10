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
            <button>Languages</button>
          </div>
          <div className="right-nav">
            <h2>Welcome, {currentUser.name}!</h2>
            <button>Find a Teacher</button>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="main-nav">
          <div className="right-nav">
            <button onClick={this.demoLogin}>Demo</button>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
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
    let logoResize = {
      width: "75px",
      height: "35px"
    }
    return (
      <div className="navbar-container">
        <img 
          src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg" 
          style={logoResize}
          />
        {this.displayNavBar()}
      </div>
    )
    
  }
};

export default MainNavBar;