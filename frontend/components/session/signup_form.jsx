import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      .signup(this.state)
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
          <h2>Sign Up</h2>
          <hr />
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleInput("name")}
              value={this.state.name}
              placeholder="Name"
            />
            {this.renderError("Name")}
            <br />
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
            <button className="submit-btn">Sign Up</button>
          </form>
        </div>

        <div className="session-other-form">
          <p>Already have an account?</p>
          {this.props.otherForm()}
        </div>
      </div>
    );
  }
}

export default SignupForm;
