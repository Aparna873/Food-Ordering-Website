import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import Logo from "../../images/logo.png";
import { auth } from "./../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import CartIcon from '../../images/cart.png';
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [user, setUser] = useState(null);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Check authentication state
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Initialize cart count from localStorage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItemsCount(storedCart.length);

        // Listen for changes in localStorage (cart updates)
        const handleStorageChange = (event) => {
            if (event.key === "cart") {
                const updatedCart = JSON.parse(event.newValue) || [];
                setCartItemsCount(updatedCart.length);
            }
        };

        window.addEventListener("storage", handleStorageChange);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    // Function to log out the user
    const logout = async () => {
        await signOut(auth);
    };

    // Toggle the mobile menu
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
                    <div className="relative">
                        <Link to="/cart">
                            <span className="w-8">
                                <img src={CartIcon} alt="Cart Icon" className="w-8 h-8" />
                            </span>
                            {cartItemsCount > 0 && (
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                                    {cartItemsCount}
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
