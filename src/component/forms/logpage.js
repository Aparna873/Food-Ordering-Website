import React from "react";
import './../forms/logpage.css';
export const CreateLogin=()=>{
    return (
        <div>
            <h1>Welsome Back!</h1>
            <form>
            <input placeholder="Full Name"/>
                <input placeholder="Password"/>
                <button>Login</button>
                <h4>New User?</h4>
            </form>
        </div>
    )
}