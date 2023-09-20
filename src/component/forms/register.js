import React, { useState } from "react";
import './register.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../../firebase-config";

export const CreateSignin = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      // Extract the user from userCredential
      const user = userCredential.user;

      // Update the user's display name
      await updateProfile(user, { displayName: registerName });

      navigate('/');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Register">
      <div className="create-form">
        <h1>Create an Account!</h1>
        <div className="input-1">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(event) => {
              setRegisterName(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={register}>Create Account</button>
        </div>
        <p>
          Already have an account? <Link to="/log" className="link-1">Login</Link>
        </p>
      </div>
    </div>
  );
};
