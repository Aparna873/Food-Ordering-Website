import React from "react";
import { useLocation} from "react-router-dom";
import { CreateSignin } from "../component/forms/register";
export const SignIn=()=>{
    var location= useLocation();
console.log(location);
    return(
         <div>
          <CreateSignin/>
         </div>
    );
};