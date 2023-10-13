import React from "react";
import { Background } from "../component/background/home-bg";
import { Company } from "../component/background/home-bg2";
import { Navbar } from "../component/nav/navbar";
import { useState } from "react";
import ".././styles/home.css"
import { useLocation } from "react-router-dom";
export const Main=()=>{
const [ currlocation ,setLocation]=useState('/');
var location= useLocation();
console.log(location);
    return(
         <div className={currlocation===location ? "select-image" : "not-selected"}> 
            <Navbar/> 
            <Background/>
            <Company/>
         </div>
    );
};