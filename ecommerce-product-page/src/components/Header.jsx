import menuIcon from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

export default function Header() {
    return (
        <div className="header">
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
                <img
                    src={cartIcon}
                    className="cart-icon"
                    // add onClick here
                />  
                <img
                    src={avatar}
                    className="avatar"
                    // add onClick here
                    />  
            </div>
        </div>
    )
}