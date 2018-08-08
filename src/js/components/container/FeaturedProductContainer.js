import React, { Component } from 'react';
import Header from '../presentational/Header';
import SecondaryHeader from '../presentational/SecondaryHeader';
import MiniPics from '../presentational/MiniPics';

class FeaturedProductContainer extends Component {

  state = {
  	price: 0,
  	quantity: 0
  };

  onDecrement = () => {
  	if (this.state.quantity > 0) {

	  	const quantity = this.state.quantity - 1;
	  	let price = quantity * 100;

	  	this.setState(state => ({ 
	  		quantity: quantity,
	  		price: price
	  	}));
  	}
  };

  onIncrement = () => {

  	const quantity = this.state.quantity + 1;
  	let price = quantity * 100;

  	this.setState(state => ({ 
  		quantity: quantity,
  		price: price
  	}));
  };

  render() {

  	const rowStyle = {
  		margin: '1rem 0',
  		padding: '2rem 0',
  		borderTop: '1px solid #eeeeee',
  		borderBottom: '1px solid #eeeeee'
  	}

  	const marginRight = {
  		marginRight: '1rem'
  	}

    return (
      <div id="featured-product-container">
      	<div className="container">
	      	<div className="row">
		      	<div className="col-xs-12 col-md-5">
		      		<div className="flex-center"><img src="/src/assets/images/black_jacket.png" /></div>
		      		<MiniPics />
		      	</div>
		      	<div id="product-details" className="col-xs-12 col-md-7">
		      		<h2 className="text-uppercase orange font-weight-bold">FULL WINTER KIT</h2>
		      		<h3>Half jacket + Skinny Trousers + Boot leather</h3>
		      		<div>
		      			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...
		      		</div>
		      		<div className="row no-gutters" style={rowStyle}>
		      			<div className="col-xs-12 col-md-6">
		      				<span style={marginRight}>Choose Size</span> <span>S</span> - <span>M</span> - <span>L</span> - <span>XL</span>
		      			</div>
		      			<div className="col-xs-12 col-md-6">
		      				<span style={marginRight}>Choose Quantity</span> <span id="decrement" onClick={this.onDecrement}>-</span> <span className="orange">{this.state.quantity}</span> <span id="increment" onClick={this.onIncrement}>+</span>
		      			</div>
		      		</div>
		      		<div id="price-container" className="row no-gutters">
		      			<div className="col-xs-12 col-md-6"><span id="price">Price {"$" + this.state.price}</span></div>
		      			<div className="col-xs-12 col-md-6"></div>
		      		</div>
		      	</div>
		    </div>
      	</div>
      </div>
    )
  }
}

export default FeaturedProductContainer;

