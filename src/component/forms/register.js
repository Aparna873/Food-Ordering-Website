import React from "react";
import './register.css'
export const CreateSignin=()=>{
    return (
        <div className="Register">
            <div className="create-form">
            <h1>Create an Account!</h1>
            <form>
                <div className="input-1">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email"/>
                <button>Create Account</button>
                </div>
            </form>
            <h4>Already have an account?</h4>
            </div>
        </div>
    )
}