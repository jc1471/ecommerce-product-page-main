import { useState } from 'react';
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import PriceSection from "./components/PriceSection";
import AddToCart from "./components/AddToCart";
import './App.css';

function App() {
  return (
    <>
      <div className="parent-container">
        <Header />
        <Gallery />
        <div className="product-section">
          <ProductInfo />
          <PriceSection />
          <AddToCart />
        </div>
      </div>
    </>
  )
}

export default App
