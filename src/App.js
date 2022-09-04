import Header from "./Components/Layout/Header";
import React, { Fragment,useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const[cardIsShown,setCardIsShown] = useState(false);

  const showCartHandler = () =>{
    setCardIsShown(true);
  }
  const hideCartHandler = () =>{
    setCardIsShown(false);
  }

  return (
    <Fragment>
      {cardIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
