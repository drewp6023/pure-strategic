import React from "react";
import PropTypes from "prop-types";

// Styles
import "../../../assets/scss/styles.scss";

const Button = ({ type, buttonStyle, text, id }) => (
  <button 
    type={type}
    className={"btn btn-" + buttonStyle}
    id={id}
  >
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
