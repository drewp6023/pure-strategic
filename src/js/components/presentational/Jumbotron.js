import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ title }) => (
  <div className="jumbotron">
    <div className="container">
      <h1 class="display-3">{title}</h1>
      <p>This is simple boilerplate template for quickly building ReactJS applications</p>
    </div>
  </div>
);

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired
};

export default Jumbotron;
