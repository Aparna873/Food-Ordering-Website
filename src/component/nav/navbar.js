import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import Logo from "../../images/logo.png";
import { auth } from "./../../firebase-config";
import { onAuthStateChanged,  signOut } from "firebase/auth";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div className="nav-bar">
            <div className="Left-nav">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h2>TastyHub</h2>
                </div>
                <div className={`left ${isMobileMenuOpen ? "active" : ""}`}>
                    <Link to="/" onClick={toggleMobileMenu}>HOME</Link>
                    <Link to="/menu" onClick={toggleMobileMenu}>MENU</Link>
                    <Link to="/about" onClick={toggleMobileMenu}>ABOUT</Link>
                    <Link to="/contact" onClick={toggleMobileMenu}>CONTACT</Link>
                </div>
                <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div className="Right-nav">
                <div className="right">
                    <Link to="/cart">Cart</Link>
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
};
