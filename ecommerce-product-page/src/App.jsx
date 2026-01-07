import { useState } from 'react';
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <>
      <div className="parent-container">
        <Header />
        <Gallery />
      </div>
    </>
  )
}

export default App
