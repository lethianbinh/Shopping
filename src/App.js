import React from "react";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
        <Routes>
            <Route path='/' element={<About/>} ></Route>
            <Route path='/product' element={<ProductsContainer/>}></Route>
            <Route path='/cart' element={<CartContainer/>}></Route>
        </Routes>
          </div>
      </main>

    </div>
  );
}

export default App;
