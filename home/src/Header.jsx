import React from "react";

export default function Header({app}){
    return(
        <div className="p-5 bg-blue-500 text-white text-3x1 font-blod" >
           Fidget Spinner World {app.name}
        </div>
    );
}

