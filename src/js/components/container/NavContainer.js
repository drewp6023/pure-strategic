import React, { Component } from 'react';
import LogoButton from '../presentational/LogoButton';

class NavContainer extends Component {
  render() {
    return (
    	<div className="container">
			<nav id="main-nav" className="navbar navbar-expand-lg navbar-light">
			  <LogoButton />
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			    <div className="navbar-nav">
			      <a className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			      <a className="nav-item nav-link active" href="#">Products</a>
			      <a className="nav-item nav-link" href="#">Hot Deals</a>
			      <a className="nav-item nav-link" href="#">About</a>
			      <a className="nav-item nav-link" href="#">Contact</a>

			      <a className="nav-item nav-link pull-right" href="#">Contact</a>
			    </div>
			  </div>
			</nav>
		</div>
    )
  }
}

export default NavContainer;

