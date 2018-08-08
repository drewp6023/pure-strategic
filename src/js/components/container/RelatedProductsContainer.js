import React, { Component } from 'react';
import Header from '../presentational/Header';
import SecondaryHeader from '../presentational/SecondaryHeader';
import Newsletter from './NewsletterContainer';
import Product from '../presentational/Product';
import Slider from "react-slick";

class ProductContainer extends Component {
  render() {

  	const headerStyle = {
  		padding: '5rem 0'
  	}

  	const settings = {
      dots: false,
      infinite: true,
      speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 1,      
      responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
      ]	
  	}

  	const productImages = [
  		{
  			url: '/src/assets/images/black_jacket.png',
  			title: 'Reebok Track Jacket',
  			cost: 100
  		},
  		{
  			url: '/src/assets/images/fission_jacket.jpeg',
  			title: 'Reebok Track Jacket',
  			cost: 200
  		},
  		{
  			url: '/src/assets/images/light_blue_jacket.png',
  			title: 'Reebok Track Jacket',
  			cost: 300
  		},
  		{
  			url: '/src/assets/images/orange_brown_jacket.jpeg',
  			title: 'Reebok Track Jacket',
  			cost: 400
  		},
  		{
  			url: '/src/assets/images/pink_jacket.png',
  			title: 'Reebok Track Jacket',
  			cost: 500
  		},
  		{
  			url: '/src/assets/images/red_jacket.jpeg',
  			title: 'Reebok Track Jacket',
  			cost: 600
  		}  		  		  		  		  		
  	]

    return (
      <div className="product-container container">
      	<div id="related-products-container">
      		<div style={headerStyle}>
		      	<Header text="Related Products" />
		      	<SecondaryHeader text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      		</div>
      		<Slider {...settings}>
      			{productImages.map((item, index) => {
      				return (
      					<div key={index}>
      						<Product imgUrl={item.url} title={item.title} price={item.cost} />
      					</div>
      				)
      			})}
      		</Slider>
	      	<Newsletter />
      	</div>
      </div>
    )
  }
}

export default ProductContainer;

      // 		<div className="row">
		  		// <div className="col-xs-12 col-md-3"><Product imgUrl="/src/assets/images/black_jacket.png" title="Reebok Track Jacket" price={100} /></div>
		  		// <div className="col-xs-12 col-md-3"><Product imgUrl="/src/assets/images/fission_jacket.jpeg" title="Reebok Track Jacket" price={200} /></div>
		  		// <div className="col-xs-12 col-md-3"><Product imgUrl="/src/assets/images/pink_jacket.png" title="Reebok Track Jacket" price={300} /></div>
		  		// <div className="col-xs-12 col-md-3"><Product imgUrl="/src/assets/images/red_jacket.jpeg" title="Reebok Track Jacket" price={400} /></div>
      // 		</div>