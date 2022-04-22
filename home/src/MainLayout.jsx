import React from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";
//import SafeComponent from "./SafeComponent";

export default function MainLayout() {
  return (
    <BrowserRouter>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
          <Header />
        
        <div className="my-10">
          <Routes>
          <Route exact path="/" element={<HomeContent/>} />
          <Route path="/product/:id" element={<PDPContent/>} />
          <Route exact path="/cart" element={<CartContent/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
//ReactDOM.render(<App />, document.getElementById("app"));
