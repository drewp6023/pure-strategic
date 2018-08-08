import React, { Component } from 'react';

const color = {
	color: this.props.color
}

const Envelope = ({ color }) => (
	<i id="envelope-icon" className="far fa-envelope" style={color}></i>
);

export default Envelope;

