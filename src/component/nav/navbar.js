import React,  {useState} from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
export const Navbar = () => {
    return (
        <div className="nav">
            <div className= "nav-bar">
                <div className="left">
                    <Link to="/home">HOME</Link>

                    <Link to="/menu">MENU</Link>

                    <Link to="/about">ABOUT</Link>

                    <Link to="/contact">CONTACT</Link>
                    </div>
                <div className="right">
                    <Link to="/sign">SIGN IN</Link>
                    <Link to="/order"><button className="btn-order">ORDER</button></Link>
               
                </div>
            </div>
            <div className="search-bar">
                <h1 style={{color:"white"}}>Good Food Ends With Good Talk</h1>
                <input type="text" placeholder= "  Search for Restaurant , Cuisine or Dish"/>
            </div>
        </div>
    );
}