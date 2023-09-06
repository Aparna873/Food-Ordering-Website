import React from "react";
import "./menu-item.css"
export function MenuItem({image,name,price,type})
{
    return (
        <div className="menuItem">
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <p>Rs. {price}</p>
            <p className="type">{type}</p>
        </div>
    )
}
export default MenuItem;