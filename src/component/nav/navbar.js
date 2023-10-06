import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import Logo from "../../images/logo.png";
import { auth } from "./../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const logout = async () => {
        await signOut(auth);
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        });
    }, []);

    return (
        <div className="nav-bar">
            <div className="Left-nav">
                <div className="logo">
                    <img src={Logo}  alt="Logo" />
                    <h2>TastyHub</h2>
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
                    <input type="text" placeholder="Search Here..." />
                </div>
                <div className="right">
                    {user ? (
                        <>
                         <span>{user.displayName}</span>
                            <Link to="#" onClick={logout}>Log Out</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/log">Login</Link>
                            <div className="register-btn">
                            <Link to="/sign">Register</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
