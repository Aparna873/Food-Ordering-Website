import React  from "react";
import "../styles/menu.css";
import { FoodMenu } from "../component/menu/foodmenu";
import { Navbar } from "../component/nav/navbar";

export const Menu=()=>{
    return(
         <div>
            <FoodMenu/>
         </div>
    );
};