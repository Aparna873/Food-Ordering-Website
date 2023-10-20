import React from "react";
import './register.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth }from "..//../firebase-config"
import Img from "../../assets/login_bg.jpg"
import { TailSpin } from "react-loader-spinner";


export function CreateSignin()
{
  const navigate = useNavigate();
  const [isloading,setIsLoading]=useState(false);
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
  const [errormsg, setErrorMsg] = useState("");
  const [userData,setUserData]=useState(
    {
      name:"",
      email:"",
      pass:"",
      confirmpass:""
    }
  )
  const registerr =() => {
    if (!userData.name || !userData.email || !userData.pass || !userData.confirmpass) {
      setErrorMsg("All fields mandatory")
      return;
  }
   // Check if password and confirm password match
   if (userData.pass !== userData.confirmpass) {
    setErrorMsg("Passwords do not match");
    return;
  }
  setErrorMsg("");
  setSubmitButtonDisabled(true);
      setIsLoading(true);
     createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.pass
      )

      .then(async(res)=>{
        setSubmitButtonDisabled(false);
         
        // Extract the user from userCredential
        const user = res.user;
  
        // Update the user's display name
        await updateProfile(user, { displayName: userData.name });
        navigate('/');
      })
     .catch ((err)=> {
      setSubmitButtonDisabled(false);
          setIsLoading(false);
          setErrorMsg(err.message);
    })
  };
  return (
    <form>
      <div className="Register">
        <div className="create-form">
         <div className="head-1">
         <h1>TAKE<span>A</span>WAY</h1>
          <p><span>GOOD FOOD</span>, GOOD MOOD</p>
         </div>
          <div className="input-1">
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setUserData((prev)=>({
                  ...prev,name:event.target.value
                }));
              }}
            ></input>
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setUserData((prev)=>({
                  ...prev,email:event.target.value
                }));
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setUserData((prev)=>({
                  ...prev,pass:event.target.value
                }));
              }}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => {
                setUserData((prev)=>({
                  ...prev,confirmpass:event.target.value
                }));
              }}
            ></input>
            <p className="error">{errormsg}</p>
            <button type="button" onClick={registerr} disabled={submitButtonDisabled}>
              {
isloading ? (
  <div className="loaderr">
         <TailSpin
         color="#9EB384"
         ariaLabel="loading"
         height={10}
         width={10}
         radius={5}
         />
  </div>

):
              (
                "Create Account"
                )}
                </button>
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
