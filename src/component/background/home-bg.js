import React, { useState } from "react";
import  BG  from "../../assets/bg.png";
import "../../styles/home.css"
import "../background/home-bg.css"
import { useLocation } from "react-router-dom";
export const Background=()=>{
const [ currlocation ,setLocation]=useState('/');
var location= useLocation();
console.log(location);
    return (
        <div className={currlocation===location ? "select-image" : "background-home"}>
            <div className="heading-home">
           <h1>
              <span> Good Food </span> Choices are Good Investments
            </h1>
           <p>Embark on a culinary journey without leaving the comfort of your home. 
            Indulge your cravings with the exquisite flavors that meet unparalleled convenience. 
            Our food ordering platform is designed to bring the best of the culinary world directly to your doorstep.
           </p>
           <div className="BUTTONS">
           <button>Explore Food</button>
           <button>Order now</button>
           </div>
           </div>
           <div className="picture-home">
            <img src={BG} width={560}/>
           </div>
        </div>
    )
}