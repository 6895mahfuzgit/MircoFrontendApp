import React, { useState, useEffect } from "react";

import {jwt,login} from "./cart.js";

export default function CartContent() {

    const[token,setToken]=useState("");
   
    return <div>JWT:{token}</div>

}