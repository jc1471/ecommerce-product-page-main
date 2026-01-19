import { useState } from 'react';
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../assets/images/icon-delete.svg";
import iconClose from "../assets/images/icon-close.svg";

export default function Cart( { setCartQuantity, cartQuantity, cartViewActive, setCartViewActive } ) {

    const handleRemoveItem = () => {
        setCartQuantity((cartQuantity) =>
            cartQuantity === 0 ? 0 : cartQuantity - 1    
        );
    };

    const handleCloseButton = () => {
        setCartViewActive(false);
    };

    return (
        <div
            className={
                `cart-section
                ${cartQuantity === 0 ? "empty" : ""}
                ${cartViewActive ? "active" : ""}`
            }
            >
            <div className="cart-header">
                <h1>Cart</h1>
                <img
                    className="cart-close-button"
                    src={iconClose}
                    onClick={handleCloseButton}    
                />
            </div>
            {cartQuantity === 0 ? 
                (<p className="cart-empty-text">Your cart is empty</p>
                ) : (
                <>
                    <div className="cart-section-items">
                        <img className="cart-item-image" src={thumbnail}/>
                        <div className="cart-section-items-info">
                            <p className="cart-section-items-title">Fall Limited Edition Sneakers</p>
                            <p className="cart-section-items-price">
                                ${125.00} x {cartQuantity} = <span className="cart-total-price">${cartQuantity * 125}.00</span>
                                </p>
                        </div>
                        <img
                            className="delete-icon"
                            src={iconDelete}
                            onClick={handleRemoveItem}
                        />
                    </div>
                    <div className="checkout-button">
                        <p>Checkout</p>
                    </div>
                </>
            )}
            
            
        </div>
    )

}