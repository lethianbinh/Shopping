import React from "react";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <MessageContainer />
          <CartContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
