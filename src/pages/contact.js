import React from "react";
import { useLocation} from "react-router-dom";
import "./../styles/contact.css";
import  Phonee  from "../assets/icons/phone.png";
import Mail from "../assets/icons/mail.png";
import  Loc from "../assets/icons/location.png";
import { Navbar } from "../component/nav/navbar";
export const Contact=()=>{
//     var location= useLocation();
// console.log(location);
    return(
        <div>
           
         <div className="contact">
            <div className="contact-1">
                <div className="head">
                <h1>CONTACT US</h1>
                </div>
                 <div className="image">
                 <span><img src={Phonee}/>
                 <p>+9190909090</p></span>
                <span>
                <img src={Mail} />
                 <p>contactinfo@gmail.com</p>
                </span>
                <span>
                <img src={Loc} />
                 <p>69 Ceres St San Francisco, California(CA),98732</p>
                </span>
                </div>
            </div>
            <div className="contact-2">
             <div className="name">
             <input type="text" placeholder="First Name"/> 
             <input type="text" placeholder="Last Name"/>
             </div>
             <input type="email" placeholder="Email Address"/>
             <textarea placeholder="Your Message"/>
             <button>Send Message</button>
            </div>
         </div>
         </div>
    );
};