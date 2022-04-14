import React from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "./PDPContent";

import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className="my-10">
        <PDPContent />
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
