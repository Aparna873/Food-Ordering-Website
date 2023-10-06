import React , {useState} from "react";
import './../forms/logpage.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword , updateProfile} from "firebase/auth";
export const CreateLogin=()=>{
  const [loginEmail,setLoginEmail]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  const navigate=useNavigate();
  const login= async()=>
    {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName: loginEmail });
        navigate('/');
        console.log(user);
      } 
      catch (error) {
        console.log(error.message);
      }   
    };
    return (
        <div className="Register-2">
          <div className="login-form">
          <h1>Welcome Back!</h1>
            <form>
            <div className="input-2">
            <input type="email" placeholder="Email" onChange={(event)=>{
              setLoginEmail(event.target.value);
            }}/>
                <input type="password" placeholder="Password" onChange={(event)=>{
                  setLoginPassword(event.target.value);
                }}/>
                <button onClick={login}>Login</button>
            </div>
            <p>New User? <Link to="/sign" className="link-2">Register</Link></p>
            </form>
          </div>
        </div>
    )
}