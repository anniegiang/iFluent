import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.display = this.display.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  display() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div>
          <h2>Welcome, {currentUser.name}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.demoLogin}>Demo</button>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
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
      <div>
        {this.display()}
      </div>
    )
  }
};

export default NavBar;