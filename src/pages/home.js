import React from "react";
import { Background } from "../component/background/home-bg";
import { Company } from "../component/background/home-bg2";
import { Navbar } from "../component/nav/navbar";
export const Main=()=>{
    return(
         <div> 
            <Navbar/> 
            <Background/>
            <Company/>
         </div>
    );
};