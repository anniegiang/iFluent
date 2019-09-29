import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .login(this.state)
      .then(() => this.props.history.push("/dashboard"))
      .then(() => this.props.closeModal());
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props
      .login({ email: "guest@aa.io", password: "guestuser" })
      .then(() => this.props.history.push("/dashboard"))
      .then(() => this.props.closeModal());
  }

  demoLogin(e) {
    e.persist();
    this.setState({
      username: "",
      password: ""
    });
    let user = "guest@aa.io".split("");
    let password = "guestuser".split("");
    this.addEmail(user, password, e);
  }

  addEmail(user, pw, e) {
    setTimeout(() => {
      this.setState({ email: this.state.email + user.shift() });
      if (user.length != 0) {
        this.addEmail(user, pw, e);
      } else {
        this.addPassword(pw, e);
      }
    }, 50);
  }

  addPassword(pw, e) {
    setTimeout(() => {
      this.setState({ password: this.state.password + pw.shift() });
      if (pw.length != 0) {
        this.addPassword(pw, e);
      } else {
        this.handleDemoLogin(e);
      }
    }, 50);
  }

  renderError(type) {
    let error;
    for (let i = 0; i < this.props.errors.length; i++) {
      if (
        this.props.errors[i].includes(type) ||
        this.props.errors[i].includes("Invalid credentials") ||
        this.props.errors[i].includes("User does not exist")
      ) {
        error = this.props.errors[i];
      }
    }
    if (this.state[type] === "") {
      error = `${type} can't be empty`;
    }
    return <div className="session-error-box">{error}</div>;
  }

  render() {
    return (
      <div className="session-form-container">
        <div className="session-form-head">
          <div className="session-form-close">
            <img
              src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/cross_icon.ad79cc7a.svg"
              alt="close"
              onClick={this.props.closeModal}
            />
          </div>
        </div>
        <div className="session-form-body">
          <h2>Log In</h2>
          <hr />
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleInput("email")}
              value={this.state.email}
              placeholder="Email"
            />
            {this.renderError("Email")}
            <br />
            <input
              type="password"
              onChange={this.handleInput("password")}
              value={this.state.password}
              placeholder="Password"
            />
            {this.renderError("Password")}
            <br />
            <button className="submit-btn">Log In</button>
            <div className="login-or">
              <span>---------------- or ---------------- </span>
            </div>
            <button className="demo-btn" onClick={this.demoLogin}>
              Demo
            </button>
          </form>
        </div>
        <div className="session-other-form">
          <p>No account yet?</p>
          {this.props.otherForm()}
        </div>
      </div>
    );
  }
}

export default LoginForm;
