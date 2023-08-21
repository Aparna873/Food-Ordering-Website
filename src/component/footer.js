import React from "react";
import Instagram from "../images/insta.png"
import Twitter from "../images/twitter.png"
import Facebook from "../images/fb.png"
import Linkedin from "../images/linked.png"
import "./footer.css"
export const Footer=()=>{
    return(
        <div className="footer">
            <div className="social-media">
                <img src={Instagram}/>
                <img src={Twitter}/>
                <img src={Facebook}/>
                <img src={Linkedin}/>
                <p> &copy; 2021 munchmagnet.com </p>
            </div>
        </div>
    )
}