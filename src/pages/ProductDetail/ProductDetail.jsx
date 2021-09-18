import React, { Component } from 'react';
import DetailsProductDescription from "../../components/details-product-description/DetailsProductDescription";
import DetailsProductImage from "../../components/details-product-image/DetailsProductImage";
import "./styles.scss"

class ProductDetails extends Component {
  render() { 
    return( 
      <div className="main-page">
          <DetailsProductImage />
          <DetailsProductDescription />
      </div>
    );
  }
}
 
export default ProductDetails;