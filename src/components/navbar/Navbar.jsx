import React, { Component } from 'react';
import "./styles.scss"
import cartLogo from "../../images/cart.png"

class Navbar extends Component {
    render() { 
        return(            
            <div className="navbar">
                <div className="title">
                    <a href="/">The Furnish</a>
                </div>
                <div className="links">
                    <a href="/" style={{color: '#707070'}}>Shop</a>
                    <a href="/">Collection</a>
                </div>
                <img src={cartLogo} alt="cart logo" className="img-navbar"/> 
            </div>);
    }
}
 
export default Navbar;