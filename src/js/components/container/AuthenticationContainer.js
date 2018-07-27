import React, { Component } from "react";
import Jumbotron from "../presentational/Jumbotron";
import AuthenticationFormContainer from "./AuthenticationFormContainer";

class AppContainer extends Component {

  state = {
    authenticated: false
  }

  render() {

    // const {  } = this.state;
    const style = {
      textAlign: "center"
    }

    return (
      <div>
        <Jumbotron title="ReactJS Boilerplate" />

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-xs-12 col-md-4">
            <h3 style={style}>Please Authenticate</h3>
            <AuthenticationFormContainer />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default AppContainer;

