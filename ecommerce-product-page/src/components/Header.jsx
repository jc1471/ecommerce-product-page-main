import { useState } from 'react';
import menuIcon from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

export default function Header( {cartViewActive, setCartViewActive, cartQuantity, setCartQuantity} ) {


    const handleCartView = () => {
        setCartViewActive((cartViewActive) => 
        cartViewActive ? false : true
        );
    }

    return (
        <header className="header">
            <div className="header-left-section">
                <img
                    src={menuIcon}
                    className="menu-icon"
                        // add onClick here
                    />
                <img
                    src={logo}
                    className="logo"
                    // add onClick here
                />
                <nav className="navbar">
                    <a className="collections-page">Collections</a>
                    <a className="men-page">Men</a>
                    <a className="women-page">Women</a>
                    <a className="about-page">About</a>
                    <a className="contact-page">Contact</a>
                </nav>
            </div>
            <div className="header-right-section">
                <div className="cart-icon-wrapper">
                    <img
                        src={cartIcon}
                        className="cart-icon"
                        onClick={handleCartView}
                    />  
                    {cartQuantity > 0 && (
                        <p className="cart-icon-amount">
                        {cartQuantity}
                    </p>
                    )}
                </div>
                <img
                    src={avatar}
                    className="avatar"
                    // add onClick here
                />  
            </div>
        </header>
    )
}