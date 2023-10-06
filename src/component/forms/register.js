import React, { useState } from "react";
import './register.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../../firebase-config";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const CreateSignin = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const navigate = useNavigate();

  const registerr = async () => {
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
const schema =yup.object().shape({
 fullname:yup.string().required("You must add Your name"),
 email: yup.string().email("Invalid email format").required("You must add Your mail"),
 password:yup.string().max(8).required("You mus add Password"),
 confirmPassword:yup.string().oneOf([])
});
const {register , handleSubmit} = useForm({
  resolver:yupResolver(schema),
})
  return (
    <form onSubmit={handleSubmit}>
    <div className="Register">
      <div className="create-form">
        <h1>Create an Account!</h1>
        <div className="input-1">
          <input
            type="text"
            placeholder="Full Name" {...register("fullname")}
            onChange={(event) => {
              setRegisterName(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email" {...register("email")}
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password" {...register("password")}
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={registerr}>Create Account</button>
        </div>
        <p>
          Already have an account? <Link to="/log" className="link-1">Login</Link>
        </p>
      </div>
    </div>
    </form>
  );
};
