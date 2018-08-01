import React, { Component } from "react";
import ReactDOM from "react-dom";
import Jumbotron from '../presentational/Jumbotron';

class HomeContainer extends Component {
	render () {
		return (
			<div>
				<Jumbotron title="React Boilerplate" />
			</div>
		)
	}
}

export default HomeContainer;