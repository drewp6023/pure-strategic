import React, { Component } from 'react';

const Product = ({ imgUrl, title, price }) => (
	<div className="product">
		<div className="product-img"><img src={imgUrl} /></div>
		<div className="product-title"><span>{title}</span></div>
		<div className="product-price"><span>${price}</span></div>
	</div>
);

export default Product;

