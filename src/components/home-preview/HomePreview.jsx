import React, { Component } from 'react';
import "./styles.scss"
import chairImg from "../../images/chair_home.png"
import changePreview from "../../images/change_preview.png"

class HomePreview extends Component {
    render() { 
        return(
            <div className="container">
                <div className="info-div">
                    <p className="descr-p">Working Chair</p>
                    <p className="name-p">The Mine</p>
                    <p className="price-p">$180</p>
                    <button className="btn-buy">BUY</button>
                </div>
                <img src={chairImg} alt="Chair" className="img-center-vertical"/>
                <div className="preview-slider-div">
                    <img src={changePreview} alt="ChangePreview" className="img-change-prev"/>
                </div>
            </div>
        );
    }
}
 
export default HomePreview;