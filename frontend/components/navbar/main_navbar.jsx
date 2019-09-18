import React from 'react';
import { Link } from 'react-router-dom';


class MainNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
    this.splashNav = this.splashNav.bind(this);
    this.loggedInNav = this.loggedInNav.bind(this);
    this.searchResultsNav = this.searchResultsNav.bind(this);
	this.displayNav = this.displayNav.bind(this);
	this.handleLogout = this.handleLogout.bind(this);
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

  displayNav() {
	  const { currentUser } = this.props;
	  if(currentUser) {
		  return this.loggedInNav();
	  } else if (!currentUser && this.props.location.pathname.includes("/teachers")) {
		return this.searchResultsNav();
	  } else if (!currentUser) {
		  return this.splashNav();
	  }
  }

  splashNav() {
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
				</div>
			</div>
		)
	}

  loggedInNav() {
      return (
        <div className="header-banner main-nav">
          <a href="/"><img 
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg"
            className="logo"
            />
          </a>
          <div className="Header-button-wrap">
            <a id="find-teacher" href="#/teachers/English">
              <div className="Header-button">
                <span>Find a Teacher</span>
              </div>
            </a>
            <a onClick={this.handleLogout}>
              <div className="Header-button">
                <span>Log out</span>
              </div>
            </a>
          </div>
        </div>
      )
	}

	searchResultsNav() {
		return (
			<div className="header-banner main-nav">
				<a href="/">
					<img 
					src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/logo_red.149c838d.svg"
					className="logo"
					/>
				</a>
				<div className="Header-button-wrap">
					<a id="find-teacher" href="#/teachers/English">
						<div className="Header-button">
							<span>Find a Teacher</span>
						</div>
					</a>
					<a onClick={this.redirectToLogIn} id="log-in" href="#">
						<div className="Header-button">
							<span>Log In</span>
						</div>
					</a>
					<a onClick={this.props.logoutUser}>
						<div className="Header-button">
							<span>Sign Up</span>
						</div>
					</a>
				</div>
			</div>
		)
	}

	handleLogout(e) {
		this.props.logoutUser()
			.then(() => this.history.push("/"));
	}


  render() {
    return (
      <header className="header-container">
        {this.displayNav()}
      </header>
    )
  }
};

export default MainNavBar;