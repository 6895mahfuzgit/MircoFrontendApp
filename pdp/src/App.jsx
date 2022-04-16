import React from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "./PDPContent";
import { BrowserRouter , Route, Routes, Switch } from "react-router-dom";

import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => {
  return (
    <BrowserRouter>
    
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <SafeComponent>
          <Header />
        </SafeComponent>
        <div className="my-10">
           
        <Routes>
            <Route path="/product/:id" component={PDPContent} />
            </Routes>     
          
        </div>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
