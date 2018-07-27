import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Button from "../presentational/Button";

class FormContainer extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  formSubmit = event => {
    event.preventDefault();

    
  }

  render() {
    const { username, password } = this.state;
    return (
      <form id="authentication-form" onSubmit={this.formSubmit}>
        <Input
          text="Username"
          name="username"
          label="username"
          type="text"
          id="username"
          value={username}
          handleChange={this.handleChange}
        />
        <Input
          text="Password"
          name="password"
          label="password"
          type="password"
          id="password"
          value={password}
          handleChange={this.handleChange}
        />
        <Button type="submit" buttonStyle="primary" text="Submit" />
        <Button type="button" buttonStyle="warning" text="Clear" id="clear-button" />
      </form>
    );
  }
}

export default FormContainer;

// const wrapper = document.getElementById("authentication-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
