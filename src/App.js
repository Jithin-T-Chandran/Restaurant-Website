import Header from "./Components/Layout/Header";
import React, { Fragment,useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const[cardIsShown,setCardIsShown] = useState(false);
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
