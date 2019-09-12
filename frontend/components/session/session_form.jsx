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
        <label>
            <input 
              onChange={this.handleInput("name")} 
              type="text" 
              value={this.state.name}
              placeholder="Name"
              >
            </input>
        </label>
      )
    }
  }

  renderError(type) {
    let error;
    switch(type) {
      case "name":
        error = this.props.errors[1];
      case "email":
        error = this.props.errors[0];
      case "password":
        error = this.props.errors[2];
      default:
        error = "";
    }

    if (!error && this.state[type] === "" ) {
      error = "Field can't be empty";
    } 

    return (
      <span className="errors">{error}</span>
    )

  }

  render() {
    return (
      <div className="modal-form-container">
        <div className="modal-close">
          <img src="https://d1m3ds7i7t710d.cloudfront.net/orion/static/media/cross_icon.ad79cc7a.svg" alt="close"/>
        </div>
        <div className="modal-body">
          {this.renderHeader()}
          <hr/>
          {this.props.formType === "signup" ? <br/> : ""}
          <form onSubmit={this.handleSubmit}>
            {this.renderNameInput()}
            {this.props.errors[1] && this.renderError("name")}
            <br/>
            <br/>
            <label>
              <input 
                onChange={this.handleInput("email")} 
                type="text" 
                value={this.state.email}
                placeholder="Email"
                >
              </input>
              {this.props.errors[0] && this.renderError("email")}
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
              {this.props.errors[2] && this.renderError("password")}
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