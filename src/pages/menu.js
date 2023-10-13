import React  from "react";
import { useLocation } from "react-router-dom";
import "../styles/menu.css";
import { FoodMenu } from "../component/menu/foodmenu";
import { Navbar } from "../component/nav/navbar";
export const Menu=()=>{
var location= useLocation();
console.log(location);
    return(
         <div>
            <Navbar/>
            <FoodMenu/>
         </div>
    );
};