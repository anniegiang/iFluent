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
        <div>
          <h1>Log in</h1>
          <Link to="/signup">Sign up</Link>
        </div>
      )
    } else if (this.props.formType === "signup") {
      return (
        <div>
          <h1>Sign up</h1>
          <Link to="/login">Log in</Link>
        </div>
      )
    }
  }

  renderNameInput() {
    if (this.props.formType === "signup") {
      return (
        <label>
            Name: <input onChange={this.handleInput("name")} type="text" value={this.state.name}></input>
        </label>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        <form onSubmit={this.handleSubmit}>
          {this.renderNameInput()}
          <label>
            Email: <input onChange={this.handleInput("email")} type="text" value={this.state.email}></input>
          </label>
          <label>
            Password: <input onChange={this.handleInput("password")} type="password" value={this.state.password}></input>
          </label>
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}


export default SessionForm;