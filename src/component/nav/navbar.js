import React,  {useState} from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import Logo from "../../images/logo.png";
export const Navbar = () => {
    return (
            <div className= "nav-bar">
                <div className="Left-nav">
                <div className="logo">
                    <img src={Logo} width={50} height={45}/>
                </div>
                <div className="left">
                    <Link to="/">HOME</Link>

                    <Link to="/menu">MENU</Link>

                    <Link to="/about">ABOUT</Link>

                    <Link to="/contact">CONTACT</Link>
                </div>
                </div>
               <div className="Right-nav">
               <div className="search-bar">
                  <input type="text" placeholder="Search Here..."/>
                </div>
                <div className="right">
                <Link to="/log">LOG IN</Link>
                    <Link to="/sign">SIGN UP</Link>
                </div>
               </div>
            </div>
    );
}