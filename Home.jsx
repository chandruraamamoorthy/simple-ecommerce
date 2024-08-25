import React from "react";
import Header from "../components/Header";
import Dashboard from "./Dashboard.jsx";
import Product from "./Product.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
import Success from "./Success.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/checkout">
          <Route path="" element={<Checkout />} />
          <Route path=":id" element={<Checkout />} />
        </Route>
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};

export default Home;
