import { useState } from 'react';
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import PriceSection from "./components/PriceSection";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import './App.css';

function App() {

  const [cartViewActive, setCartViewActive] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <div className="parent-container">
        <Header
          cartViewActive={cartViewActive}
          setCartViewActive={setCartViewActive}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
        <Cart
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
          cartViewActive={cartViewActive}
          setCartViewActive={setCartViewActive}
        />
        <div className="main-section">
          <Gallery />
          <div className="product-section">
            <ProductInfo />
            <PriceSection />
            <AddToCart
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}  
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
