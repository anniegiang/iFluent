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
  }
  
  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => this.props.history.push("/"));
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
          <a href="/signup">Sign up</a>
        </div>
      )
    } else if(type === "signup") {
        return (
          <div>
            <p>Already have an account?</p>
            <a href="/login">Log in</a>
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

  render() {
    return (
      <div className="modal-form-container">
        <div className="modal-body">
          {this.renderHeader()}
          <br/>
          <br/>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          <form onSubmit={this.handleSubmit}>
            
            {this.renderNameInput()}
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