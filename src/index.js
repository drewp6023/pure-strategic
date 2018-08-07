import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./js/components/container/AppContainer";

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(
	<App />
, wrapper) : false;