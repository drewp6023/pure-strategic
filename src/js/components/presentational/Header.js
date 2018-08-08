import React from "react";
import PropTypes from "prop-types";

// Styles
import "../../../assets/scss/styles.scss";

const Header = ({ text }) => (
	<h2 className="header text-uppercase">{text}</h2>
);

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
