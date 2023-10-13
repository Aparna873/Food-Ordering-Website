import React , {useState} from "react";
import './../forms/logpage.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import Back from "../../assets/register-bg.jpg"
import { signInWithEmailAndPassword , updateProfile , getAuth} from "firebase/auth";
export const CreateLogin=()=>{
  const [loginEmail,setLoginEmail]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  const [loginName,setLoginName]=useState("");
  const navigate = useNavigate();
  const authInstance = getAuth();
  const login= async()=>
    {
      try {
        const userCredential = await signInWithEmailAndPassword(
          authInstance,
          loginEmail,
          loginPassword
        );
        const user = userCredential.user;
        if (loginName) {
          await updateProfile(user, { displayName: loginName });
        }
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
          <div className="head">
          <h1>Welcome! </h1>
          <p>Let's Order Food</p>
          </div>
            <form>
            <div className="input-2">
            <input type="email" placeholder="Email" onChange={(event)=>{
              setLoginEmail(event.target.value);
            }}/>
                <input type="password" placeholder="Password" onChange={(event)=>{
                  setLoginPassword(event.target.value);
                }}/>
                <button type="button" onClick={login}>Login</button>
            </div>
<div className="paragraph">
<p>New to Takeaway? <Link to="/sign" className="link-2"> Register Here</Link></p>
</div>
            </form>
          </div>
          <div className="background-right">
             <img src={Back}/>
          </div>
        </div>
    )
}