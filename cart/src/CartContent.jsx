import React, { useState, useEffect } from "react";

import {jwt,login} from "./cart.js";

export default function CartContent() {

    const[token,setToken]=useState("");
    useEffect(()=>{
        login("sally","123")
     return jwt.subscribe((val)=>setToken(val??""))
    },[]);

    return <div>JWT:{token}</div>

}