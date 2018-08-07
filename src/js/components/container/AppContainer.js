import React, { Component } from 'react';
import ContactContainer from './ContactContainer';
import NavContainer from './NavContainer';
import ProductContainer from './ProductContainer';
import FooterContainer from './FooterContainer';

class AppContainer extends Component {
  render() {
    return (
    	<div>
    		<ContactContainer />
    		<NavContainer />
    		<ProductContainer />
			<FooterContainer />    		
    	</div>
    )
  }
}

export default AppContainer;

