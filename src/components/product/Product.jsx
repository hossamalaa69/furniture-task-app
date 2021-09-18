import React, { Component } from 'react';
import "./styles.scss"
import moreInfoImage from "../../images/btn_more.png"

class Product extends Component {
    handleOpenProduct = () => {
        this.props.openProduct();
    }
    render() { 
        const size =  this.props.size==='large'? '2':'1';
        
        const divName = "div-name";
        const productNameDiv = divName.concat(size);

        const divInfo = "div-more-info";
        const productInfoDiv = divInfo.concat(size);

        return( 
            <div className={"grid-item " + this.props.color + " " + this.props.size}>
                <div className={productNameDiv}>
                    {this.props.name}
                </div>
                <img className="img-product" src={this.props.image} alt="furniture"></img>
                <div className={productInfoDiv} onClick={this.handleOpenProduct}>
                    <img className="btn-more-info" src={moreInfoImage} alt="moreInfo"></img>
                </div>
            </div>
        );
    }
}
 
export default Product;