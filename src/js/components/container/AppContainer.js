import React, { Component } from "react";
import ReactDOM from "react-dom";
import Jumbotron from "../presentational/Jumbotron";

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {

    };

    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }
  render() {

    // const {  } = this.state;

    return (
      <Jumbotron title="ReactJS Boilerplate" />
    );
  }
}

// export default FormContainer;
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
