import React , { useState } from "react";
import Header from './components/layout/Header';
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";
import './App.css';

function App() {
  const [showCart , setShowCart ] =useState(false)

  const showingCart = props=>{
    setShowCart(true)
  }

  const hiddenCart = props =>{
    setShowCart(false)
  }
  return (
    <CartProvider>
      {showCart &&<Cart onHidden={hiddenCart} />}
      <Header  onShowcart ={setShowCart}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
