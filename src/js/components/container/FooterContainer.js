import React, { Component } from 'react';
import LogoButton from '../presentational/LogoButton';

class FooterContainer extends Component {
  render() {

    const links = [
      {title: 'our feed'},
      {title: 'terms and conditions'},
      {title: 'our privacy'},
      {title: 'join us'},
      {title: 'live support'}
    ]

    const paymentStyle = {
      marginBottom: '1rem'
    }

    return (
      <div id="footer-container" className="container">
        <div className="row">
          <div className="col-xs-12 col-md-1">
            <LogoButton />
          </div>
          <div className="col-xs-12 col-md-5"></div>
          <div className="col-xs-12 col-md-4">
            <ul>
              {links.map((link, index) => {
                return (
                  <li key={index}><a href="">{link.title}</a></li>
                )
              })}
            </ul>            
          </div>
          <div className="col-xs-12 col-md-2">
            <div className="orange font-weight-bold" style={paymentStyle}>Payment Methods</div>
            <div>
              <i className="far fa-credit-card"></i>
              <i className="far fa-credit-card"></i>
              <i className="far fa-credit-card"></i>
              <i className="far fa-credit-card"></i>
              <i className="far fa-credit-card"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterContainer;

