import React, { Component } from 'react';
import "./styles.scss"
import ImageSlider from "../../images/slider.png"
import ImageProduct from "../../images/details_chair.png"

class DetailsProductImage extends Component {
    render() { 
        return(
            <div className="main-div">
                <div className="product-path-div">
                    Home/ Collection/ New Arrivals/ Leifarne 
                </div>
                <div className="product-image-div">
                    <img src={ImageSlider} alt="slider" className="slider-img"></img>
                    <img src={ImageProduct} alt="Product" className="product-img"></img>
                </div>
                <div className="product-info-div">
                    <p className="product-category">Dining Chair</p>
                    <div className="product-name-buy-div">
                        <p className="product-name">Leifarne</p>
                        <button className="buy-btn">BUY</button>
                    </div>
                    <p className="product-price">$180</p>
                </div>
            </div>
        );
    }
}
 
export default DetailsProductImage;