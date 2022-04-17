import React, { useState, useEffect } from "react";

import {jwt,login} from "./cart.js";
import Login from "./Login.jsx";

export default function CartContent() {

    const[token,setToken]=useState("");
   
    return <div>
        <div><Login/></div>
        JWT:{token}</div>

}