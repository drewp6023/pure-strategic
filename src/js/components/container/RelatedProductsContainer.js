import React, { Component } from 'react';
import Header from '../presentational/Header';
import SecondaryHeader from '../presentational/SecondaryHeader';
import Newsletter from './NewsletterContainer';
import Product from '../presentational/Product';

class ProductContainer extends Component {
  render() {

  	const headerStyle = {
  		padding: '5rem 0'
  	}

  	const productContainerStyle = {
  		display: 'flex',
  		alignItems: 'center',
  		justifyContent: 'space-around'
  	}

    return (
      <div className="product-container container">
      	<div id="related-products-container">
      		<div style={headerStyle}>
		      	<Header text="Related Products" />
		      	<SecondaryHeader text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      		</div>
      		<div style={productContainerStyle}>
		  		<Product imgUrl="/src/assets/images/black_jacket.png" title="Reebok Track Jacket" price={100} />
		  		<Product imgUrl="/src/assets/images/fission_jacket.jpeg" title="Reebok Track Jacket" price={200} />
		  		<Product imgUrl="/src/assets/images/pink_jacket.png" title="Reebok Track Jacket" price={300} />
		  		<Product imgUrl="/src/assets/images/red_jacket.jpeg" title="Reebok Track Jacket" price={400} />
      		</div>
	      	<Newsletter />
      	</div>
      </div>
    )
  }
}

export default ProductContainer;

