import cartIcon from "../assets/images/icon-cart.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

export default function AddToCart() {
    return (
        <div className="AddToCart">
            <div className="quantity-section">
                <img
                    className="minus-icon"
                    src={minusIcon}
                    />
                <p className="cart-quantity">0</p>
                <img
                    className="plus-icon"
                    src={plusIcon}
                    />
            </div>
            <div className="add-to-cart-button-wrapper">
                <img
                    className="cart-icon"
                    src={cartIcon}
                    />
                <p className="add-to-cart-text">Add to cart</p>
            </div>
        </div>
    )
}