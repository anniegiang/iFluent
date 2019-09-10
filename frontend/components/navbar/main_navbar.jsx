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
            <button><span>Find a Teacher</span></button>
            <button onClick={logout}><span>Logout</span></button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="main-nav">
          <div className="right-nav">
            <Link to="/login"><span>Log In</span></Link>
            <Link to="/signup"><span>Sign Up</span></Link>
            <button onClick={this.demoLogin}><span>Demo</span></button>
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
      height: "38px"
    }
    return (
      <div className="navbar-container">
        <img 
          // src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg" 
          src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_white.72e72948.svg" 
          style={logoResize}
          />
        {this.displayNavBar()}
      </div>
    )
    
  }
};

export default MainNavBar;