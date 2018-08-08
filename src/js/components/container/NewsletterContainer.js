import React, { Component } from 'react';

class NewsletterContainer extends Component {
  render() {

	const nlText = {
		fontWeight: 'bold',
		marginRight: '1rem'
	}

	const envStyle = {
		marginRight: '1rem',
		fontSize: '1.5rem'
	}

    return (
      <div id="newsletter-container">
      	<div className="row">
      		<div className="col-md-6 flex-center">
      			<span className="orange text-uppercase" style={nlText}>News Letter</span>
      			<span className="font-italic">join us now to get all news and special offers</span>
      		</div>
      		<div className="col-md-4 flex-center">
	            <div className="input-group mb-3 no-margin-bottom">
	              <div className="input-group-prepend flex-center">
	                <span className="input-group-text"><i id="envelope-icon" className="far fa-envelope orange" style={envStyle}></i></span>
	              </div>
	              <input type="text" className="form-control font-italic" placeholder="type your email here" aria-label="email" />
	            </div> 
      		</div>
      		<div className="col-md-2 flex-center">
      			<button id="join-us-btn" className="btn font-italic">join us</button>
      		</div>
      	</div>
      </div>
    )
  }
}

export default NewsletterContainer;

