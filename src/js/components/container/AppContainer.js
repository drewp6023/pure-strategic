import React, { Component } from 'react';
import Contact from './ContactContainer';
import Nav from './NavContainer';
import FeaturedProduct from './FeaturedProductContainer';
import RelatedProducts from './RelatedProductsContainer';
import Footer from './FooterContainer';

import '../../../assets/scss/styles.scss';

class AppContainer extends Component {
  render() {
    return (
    	<div>
    		<Contact />
    		<Nav />
    		<FeaturedProduct />
    		<RelatedProducts />
			<Footer />    		
    	</div>
    )
  }
}

export default AppContainer;

