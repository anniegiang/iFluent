import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: ""
    }

    this.renderHeader = this.renderHeader.bind(this);
    this.renderNameInput = this.renderNameInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderOtherFormLink = this.renderOtherFormLink.bind(this);
    this.renderError = this.renderError.bind(this);
  }
  
  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => this.props.history.push("/"))
    .then(() => this.props.closeModal());
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    }
  }

  renderHeader() {
    if(this.props.formType === "login") {
      return (
        <h1> Log In </h1>
      )
    } else {
      return (
        <h1> Sign Up </h1>
      )
    }
  }

  renderOtherFormLink(type) {
    if(type === "login") {
      return (
        <div>
          <p>No account yet?</p>
          {this.props.otherForm()}
        </div>
      )
    } else if(type === "signup") {
        return (
          <div>
            <p>Already have an account?</p>
            {this.props.otherForm()}
          </div>
        )
    }
  }

  renderNameInput() {
    if (this.props.formType === "signup") {
      return (
        <div>
          <label>
              <input 
                onChange={this.handleInput("name")} 
                type="text" 
                value={this.state.name}
                placeholder="Name"
                >
              </input>
          </label>
          {this.renderError("Name")}
        </div>
      )
    }
  }

  renderError(type) {
    let error;
    // debugger
    for(let i = 0; i < this.props.errors.length; i++) {
      console.log(this.props.errors[i]);
      if (this.props.errors[i].includes(type)) {
        error = this.props.errors[i]
      }
    }

    if (this.state[type] === "" ) {
      error = `${type} can't be empty`;
    } 
    // console.log("full errors: ", this.props.errors);
    // console.log("error: ", error);
    // console.log(type);
    // console.log(typeof type);
    return (
      <span className="error-box">{error}</span>
    )

  }

  render() {
    return (
      <div className="modal-form-container">
        <div className="modal-close">
          <img 
            src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/cross_icon.ad79cc7a.svg" 
            alt="close"
            onClick={this.props.closeModal}
            />
        </div>
        <div className="modal-body">
          {this.renderHeader()}
          <hr/>
          {this.props.formType === "signup" ? <br/> : ""}
          <form onSubmit={this.handleSubmit}>
            {this.renderNameInput()}
            <br/>
            <label>
              <input 
                onChange={this.handleInput("email")} 
                type="text" 
                value={this.state.email}
                placeholder="Email"
                >
              </input>
              {this.renderError("Email")}
            </label>
            <br/>
            <br/>
            <label>
              <input 
                onChange={this.handleInput("password")} 
                type="password" 
                value={this.state.password}
                placeholder="Password"
              >
              </input>
              {this.renderError("Password")}
            </label>
            <br/>
            <br/>
            <button>{this.props.formType === "login" ? "log in" : "sign up"}</button>
            {this.renderOtherFormLink(this.props.formType)}
          </form>
        </div>
      </div>
    )
  }
}


export default SessionForm;