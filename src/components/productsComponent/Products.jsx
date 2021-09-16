import React, { Component } from 'react';
import Product from '../productComponent/Product';
import "./styles.scss";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";

class Products extends Component {
    state = {
        products: [
            {name: "Ingrid", size: "", image: img1, color: ""},
            {name: "Shell", size: "", image: img2, color:""},            
            {name: "Leifarne", size: "", image: img3, color:"colorCyanBlue"},            
            {name: "Gronlid", size: "large", image: img4, color:"colorPanton"},            
            {name: "Ekebol", size: "", image: img1, color:"colorMintGreen"},            
            {name: "Lallerod", size: "", image: img2, color:""},            
            {name: "Vejmon", size: "large", image: img5, color:"colorGrayighViolet"}
        ]
    }   
    render() { 
        const productsList = this.state.products.map(product => {
            return(
                <Product 
                    key={product.name} 
                    name={product.name}
                    size={product.size} 
                    image={product.image}
                    color={product.color}    
                />
            )
        })

        return( 
            <div>
                <div className="div-center">
                    <p>Lean &nbsp;</p>
                    <p className="p-low-opacity">too far</p>
                </div>
                <div className="grid-container">
                    {productsList}
                </div>
                <div className="div-center">
                    <button className="btn-more">VIEW MORE</button>
                </div>
            </div>
        );
    }
}
 
export default Products;