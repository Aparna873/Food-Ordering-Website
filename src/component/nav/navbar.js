import React,  {useState} from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
export const Navbar = () => {
    return (
            <div className= "nav-bar">
                <div className="left">
                    <Link to="/home">HOME</Link>

                    <Link to="/menu">MENU</Link>

                    <Link to="/about">ABOUT</Link>

                    <Link to="/contact">CONTACT</Link>
                    </div>
                <div className="right">
                <Link to="/log">LOG IN</Link>
                    <Link to="/sign">SIGN UP</Link>
                </div>
            </div>
    );
}