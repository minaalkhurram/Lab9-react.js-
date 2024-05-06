import React, {useState} from "react";

export default function Football(){
function Shoot(a)
{
    alert(a);

}

return(
    <div>
        <button onClick={()=>Shoot("Goal")}>Take the shot</button>
    </div>
);

}
