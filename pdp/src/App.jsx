import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
//import Header from "home/Header";
const Header=React.lazy(()=>import("home/Header") )

import "./index.scss";

const App = () => {
  const [showHeader, setshowHeader] = useState(false);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      { showHeader &&
        (
          <Suspense fallback={<div>Loading......</div>}>
          <Header />
        </Suspense>
        )
      }
      <button className="text-3xl p-5" onClick={()=>setshowHeader(!showHeader)} >Show the header</button>
      <div className="my-10">PDP Page Content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
