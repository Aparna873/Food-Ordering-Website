import React from "react";
import './../forms/logpage.css';
import { Link } from "react-router-dom";
export const CreateLogin=()=>{
    return (
        <div className="Register-2">
          <div className="login-form">
          <h1>Welcome Back!</h1>
            <form>
            <div className="input-2">
            <input placeholder="Email"/>
                <input placeholder="Password"/>
                <button>Login</button>
            </div>
            <p>New User? <Link className="link-2">Register</Link></p>
            </form>
          </div>
        </div>
    )
}