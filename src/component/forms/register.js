import React from "react";
import './register.css'
import { Link } from "react-router-dom";
export const CreateSignin=()=>{
    return (
        <div className="Register">
            <div className="create-form">
            <h1>Create an Account!</h1>
            <form>
                <div className="input-1">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button>Create Account</button>
                </div>
            </form>
            <p >Already have an account? <Link className="link-1">Login</Link></p>
            </div>
        </div>
    )
}