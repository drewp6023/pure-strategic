import React, { Component } from 'react';

class ContactContainer extends Component {
  render() {
    return (
      <div id="contact-container" className="container">
		<div className="row">
			<div className="col-md-4">
				<i id="envelope-icon" className="far fa-envelope orange" ></i>test@test.com
				<i id="phone-icon" className="fas fa-phone orange"></i>333-333-3333
			</div>		
			<div className="col-md-6">
				
			</div>
			<div className="col-md-2">
				<i className="social-icon fab fa-facebook-f"></i>
				<i className="social-icon fab fa-twitter"></i>
				<i className="social-icon fab fa-google-plus-g"></i>
				<i className="social-icon fab fa-instagram"></i>
			</div>			
		</div>
	  </div>
    )
  }
}

export default ContactContainer;

