import { useState } from 'react';
import cartIcon from "../assets/images/icon-cart.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

export default function AddToCart( { cartQuantity, setCartQuantity } ) {
    
    const [itemQuantity, setItemQuantity] = useState(0);

    const handleAddToCart = () => {
        setCartQuantity((cartQuantity) =>
            cartQuantity + itemQuantity
        );
        setItemQuantity(0);
    }
    
    const handlePlus = () => {
        setItemQuantity((itemQuantity) =>
            itemQuantity + 1);
    };

    const handleMinus = () => {
        setItemQuantity((itemQuantity) =>
            itemQuantity === 0 ? 0 : itemQuantity - 1);
    }

    return (
        <div className="add-to-cart">
            <div className="quantity-section">
                <img
                    className="minus-icon"
                    src={minusIcon}
                    onClick={handleMinus}
                    />
                <p className="cart-quantity">
                    {itemQuantity}
                </p>
                <img
                    className="plus-icon"
                    src={plusIcon}
                    onClick={handlePlus}
                    />
            </div>
            <div className="add-to-cart-button-wrapper"
                onClick={handleAddToCart}>
                <img
                    className="cart-icon"
                    src={cartIcon}
                    />
                <p className="add-to-cart-text">Add to cart</p>
            </div>
        </div>
    )
}