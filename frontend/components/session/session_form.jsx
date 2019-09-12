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
    this.renderDemoButton =this.renderDemoButton.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderOr = this.renderOr.bind(this);
  }
  
  componentDidMount() {
    this.props.clearErrors();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
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
    for(let i = 0; i < this.props.errors.length; i++) {
      if (this.props.errors[i].includes(type) || this.props.errors[i].includes("Invalid credentials") || this.props.errors[i].includes("User does not exist")) {
        error = this.props.errors[i]
      }
    }
    
    // let newType = type[0].toLowerCase() + type.slice(1);
    if (this.state[type] === "" ) {
      error = `${type} can't be empty`;
      console.log(error);
    }
    return (
      <div className="error-box">{error}</div>
    )

  }

  renderDemoButton() {
    return (
      <button className="demo-btn" onClick={this.demoLogin}>Demo</button>
    )
  }

  demoLogin(e) {
     e.preventDefault();
     this.props.processForm({email: "guest@aa.io", password: "password"})
      .then(() => this.props.history.push("/"))
      .then(() => this.props.closeModal());
  }

  renderOr() {
    return (
      <div className="or">
        <span>----------------   or   ---------------- </span>
      </div>
    )
  }


  render() {
    return (
      <div className="modal-form-container modal-open">
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
            <button className="submit-btn">{this.props.formType === "login" ? "log in" : "sign up"}</button>
            
            {this.props.formType === "login" ? this.renderOr() : ""}
            {this.props.formType === "login" ? this.renderDemoButton() : ""}
  
            {/* {this.renderOtherFormLink(this.props.formType)} */}
          </form>
        </div>
        <div className="modal-footer">

        </div>
      </div>
    )
  }
}


export default SessionForm;