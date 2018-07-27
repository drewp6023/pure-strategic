import React, { Component } from "react";
import ReactDOM from "react-dom";
import Jumbotron from "../presentational/Jumbotron";
import FormContainer from "./FormContainer";

class AppContainer extends Component {

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
            <FormContainer />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

// export default FormContainer;
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
