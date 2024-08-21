
import React, { Children } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {CartContextProvider} from "./store/CartContext";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import {UserProgressContextProvider} from "./store/UserProgressContext";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";



function App() {
  return (
    <div className="App">
      
      <UserProgressContextProvider>
      <CartContextProvider>      
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Checkout/>
        <OrderConfirmation/>
      </main>
      <Footer/>
      </CartContextProvider>
      </UserProgressContextProvider>
    </div>
  );
}

export default App;
