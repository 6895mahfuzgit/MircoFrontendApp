import React, { useState, useEffect } from "react";


export default function CartContent() {

    const[token,setToken]=useState("");
    useEffect(()=>{},[]);
    return <div>JWT:{token}</div>

}