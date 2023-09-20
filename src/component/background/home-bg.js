import React from "react";
import  BG  from "../../assets/bg.png";
import "../../styles/home.css"
import L from "../../assets/leaf.png"
export const Background=()=>{
    return (
        <div className="back-ground">
            <div className="heading">
           <h2>
                Welcome To Our <span>Indian</span> Restaurant.
            </h2>
           <p>Food is art and science. So, you take something out, 
            you have to work with the recipe to make sure that you're 
            providing delicious food with cleaner labels.
           </p>
           </div>
           <div className="picture">
            <img src={BG}/>
           </div>
        </div>
    )
}