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

  demoLogin(e) {
    e.preventDefault();
    this.props
      .processForm({ email: "guest@aa.io", password: "password" })
      .then(() => this.props.history.push("/dashboard"))
      .then(() => this.props.closeModal());
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
      <div className="login-form-container">
        <div className="session-form-close">
          <img
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/cross_icon.ad79cc7a.svg"
            alt="close"
            onClick={this.props.closeModal}
          />
        </div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInput("email")}
            value={this.state.email}
            placeholder="Email"
          />
          {this.renderError("Email")}
          <input
            type="password"
            onChange={this.handleInput("password")}
            value={this.state.password}
            placeholder="Password"
          />
          {this.renderError("Password")}
          <input type="submit" value="Log In" />
          <div class="login-or">
            <span>or</span>
          </div>
          <button className="demo-btn" onClick={this.demoLogin}>
            Demo
          </button>
        </form>

        <div className="session-other-form">
          <p>No account yet?</p>
          {this.props.otherForm()}
        </div>
      </div>
    );
  }
}

export default LoginForm;
