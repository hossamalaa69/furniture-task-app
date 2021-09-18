import React, { Component } from 'react';

import HomePreview from "../../components/home-preview/HomePreview";
import ProductsGrid from "../../components/products-grid/ProductsGrid";

class Home extends Component {
  openProduct = () => {
    this.props.history.push('/details');
  }
  render() { 
    return (
      <div className="App">
          <HomePreview />
          <ProductsGrid openProduct={this.openProduct}/>
       </div>
    );
  }
}
 
export default Home;