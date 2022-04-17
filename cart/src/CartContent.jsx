import React, { useState, useEffect } from "react";

import {jwt,login} from "./cart.js";
import Login from "./Login.jsx";
import MiniCart from "./MiniCart.jsx";

export default function CartContent() {

    const[token,setToken]=useState("");
   
    return <div>
        <div><Login/>
        <MiniCart/>
        JWT:{token}</div></div>

}