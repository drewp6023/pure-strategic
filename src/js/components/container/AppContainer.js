import React, { Component } from 'react';
import ContactContainer from './ContactContainer';
import NavContainer from './NavContainer';
import ProductContainer from './ProductContainer';
import FooterContainer from './FooterContainer';

import '../../../assets/scss/styles.scss';

class AppContainer extends Component {
  render() {
    return (
    	<div>
    		<ContactContainer />
    		<hr />
    		<NavContainer />
    		<hr />
    		<ProductContainer />
			<FooterContainer />    		
    	</div>
    )
  }
}

export default AppContainer;

