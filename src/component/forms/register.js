import React, { useState } from "react";
import './register.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Img from "../../assets/login_bg.jpg"

export const CreateSignin = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

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

  const schema = yup.object().shape({
    fullname: yup.string().required("You must add Your name"),
    email: yup.string().email("Invalid email format").required("You must add Your mail"),
    password: yup.string().min(8).required("You must add Password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    registerr();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Register">
        <div className="create-form">
         <div className="head-1">
         <h1>TAKE<span>A</span>WAY</h1>
          <p><span>GOOD FOOD</span>, GOOD MOOD</p>
         </div>
          <div className="input-1">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullname")}
              onChange={(event) => {
                setRegisterName(event.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <button type="button" onClick={registerr}>Create Account</button>
          </div>
          <div className="paragraph-1">
          <p>Existing Users? 
             <Link to="/log" className="link-1"> Login Here</Link>
          </p>
          </div>
        </div>
       <div className="image-right">
       <img src={Img}/>
       </div>
      </div>
    </form>
  );
};
