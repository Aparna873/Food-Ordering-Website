import React from "react";
import MoonLoader from 'react-spinners/ClipLoader';
import "./loader.css";
const LoaderComp=()=>{
    return (
        <div className="loading-home">
        <MoonLoader
       size={45}
       loading={true}
      color={'#FF4C29'}
       />  
          </div>
    )
}
export default LoaderComp;