import React, { useState } from "react";
import './../forms/logpage.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import Back from "../../assets/register-bg.jpg"
import { signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { TailSpin } from "react-loader-spinner";
export function CreateLogin() {
  const [userData, setuserData] = useState(
    {
      email: "",
      password: ""
    }
  )
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errormsg, setErrorMsg] = useState("");
  const login = () => {
    if (!userData.email || !userData.password) {
      setErrorMsg("All fields mandatory")
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    setIsLoading(true);
    signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        setIsLoading(true);
        await updateProfile(user, { displayName: userData.name });
        setIsLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setIsLoading(false);
        setErrorMsg(err.message);
      })
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
            <input type="email" placeholder="Email" onChange={(event) => {
              setuserData({
                ...userData, email: event.target.value
              });
            }} />
            <input type="password" placeholder="Password" onChange={(event) => {
              setuserData({
                ...userData, password: event.target.value,
              });
            }} />
            <p style={{ color: "red" }} className='error'>{errormsg}</p>
            <button type="button" onClick={login} disabled={submitButtonDisabled}>
              {
                isloading
                  ?
                  (
                    <div className="submit-loader">
                      <TailSpin
                        color="#9EB384"
                        ariaLabel="loading"
                        height={10}
                        width={10}
                        radius={5}
                      />
                    </div>
                  ) :
                  (
                    "Login"
                  )
              }
            </button>
          </div>
          <div className="paragraph">
            <p>New to Takeaway? <Link to="/sign" className="link-2"> Register Here</Link></p>
          </div>
        </form>
      </div>
      <div className="background-right">
        <img src={Back} width={560}/>
      </div>
    </div>
  )
};