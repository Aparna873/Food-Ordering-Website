import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';
import Logo from "../../images/logo.png";
import { auth } from "./../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import CartIcon from '../../images/cart.png'


export const Navbar = () => {
    const [user, setUser] = useState(null);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Retrieve the cart data from localStorage and update the count
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItemsCount(storedCart.length);
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="nav-bar">
            <div className="Left-nav">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
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
                    <div className="relative">
                        <Link to="/cart">
                           <span className="w-8"> <img src={CartIcon} alt="Cart Icon" className="w-8 h-8" /></span>
                            {cartItemsCount > 0 && (
                           <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
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
