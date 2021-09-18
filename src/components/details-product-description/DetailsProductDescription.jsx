import React, { Component } from 'react';
import "./styles.scss"
import ImageNewLook from "../../images/new_look2.png"
import ImageFacebook from '../../images/Facebook.png'
import ImageTwitter from '../../images/Twitter.png'
import ImagePinterest from '../../images/Pinterest.png'

class DetailsProductDescription extends Component {
    render() { 
        return(
            <div className="main-container">
                <p className="p-intro">Intro</p>
                <p className="p-descr">
                    Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.
                </p>
                <p className="p-prod-info">
                    Product Information
                </p>
                <div className="aspect-div">
                    <p className="div-p">Dimensions</p>
                    <p className="div-content">52 x 50 x 88 cm.</p>
                </div>
                <div className="div-line"></div>
                <div className="aspect-div">
                    <p className="div-p">Materials</p>
                    <p className="div-content">Polypropylene<br/>plastic<br/>Aluminium Solid birch</p>
                </div>
                <div className="div-line"></div>
                <div className="aspect-div">
                    <p className="div-p">Good to know</p>
                    <p className="div-content">Wipe clean with a cloth dampened in a mild cleaner.</p>
                </div>
                <div className="div-line"></div>
                <div className="pic-div">
                    <img src={ImageNewLook} alt="New Look" className="img-new-look"></img>
                    <div className="img-links">
                        <img src={ImageFacebook} alt="Facebook" className="icon-link"></img>
                        <img src={ImageTwitter} alt="Twitter" className="icon-link"></img>
                        <img src={ImagePinterest} alt="Pinterest" className="icon-link"></img>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DetailsProductDescription;