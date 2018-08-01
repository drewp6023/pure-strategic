import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from "./js/components/container/AppContainer";

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(
	<Router>
		<App />
	</Router>
, wrapper) : false;