import React from "react";
import PropTypes from "prop-types";

// Styles
import "../../../assets/scss/styles.scss";

const SecondaryHeader = ({ text }) => (
	<h3 className="header">{text}</h3>
);

SecondaryHeader.propTypes = {
  text: PropTypes.string.isRequired
};

export default SecondaryHeader;
