import React, { Component } from 'react';
import Header from '../presentational/Header';
import SecondaryHeader from '../presentational/SecondaryHeader';

class FeaturedProductContainer extends Component {
  render() {
    return (
      <div id="featured-product-container">
      	<div className="container">
	      	<div className="row">
		      	<div className="col-xs-12 col-md-5 flex-center">
		      		<img src="/src/assets/images/black_jacket.png" />
		      	</div>
		      	<div className="col-xs-12 col-md-7">

		      	</div>
		    </div>
      	</div>
      </div>
    )
  }
}

export default FeaturedProductContainer;

