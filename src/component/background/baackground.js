import React from "react"
import '../background/background.css'
export const Background=()=>{
    return(
       <div className="image">
         <div className="search-bar">
                <h1 style={{color:"white"}}>Good Food Ends With Good Talk</h1>
                <input type="text" placeholder= "  Search for Restaurant , Cuisine or Dish"/>
            </div>
       </div>
    )
}