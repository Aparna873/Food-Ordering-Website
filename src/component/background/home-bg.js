import React from "react";
import  BG  from "../../assets/bg.png";
export const Background=()=>{
    return (
        <div className="back-ground">
           <div className="heading">
           <h1>
               <span className="s1"> Welcome To </span> 
               <span className="s2"> Our <span className="s21">Indian</span></span>
               <span className="s3">Restaurant.</span>
            </h1>
           <p>Food is art and science. So, you take something out, 
            you have to work with the recipe to make sure that you're 
            providing delicious food with cleaner labels.
           </p>
           </div>
           <div className="picture">
            <img src={BG} width={500}/>
           </div>
        </div>
    )
}