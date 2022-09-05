import Header from "./Components/Layout/Header";
import React, {useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const[cardIsShown,setCardIsShown] = useState(false);

  const showCartHandler = () =>{
    setCardIsShown(true);
  }
  const hideCartHandler = () =>{
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      {cardIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
