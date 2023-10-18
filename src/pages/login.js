import React from "react";
import { useLocation} from "react-router-dom";
import { CreateLogin } from "../component/forms/logpage";
export const Login=()=>{
//     var location= useLocation();
// console.log(location);
    return(
        <div>
            <CreateLogin/>
        </div>
    )
}