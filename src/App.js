import './App.css';
import './index.css'
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Main } from './pages/home';
import { Menu } from './pages/menu';
import {Error} from './pages/error';
import { Login } from './pages/login';
import { SignIn } from './pages/signup';
import { createContext} from 'react';
import {auth} from "./firebase-config";
import { useState,useEffect } from 'react';
import MoonLoader from 'react-spinners/ClipLoader';
import "./react-loader/loader.css";
import { onAuthStateChanged } from 'firebase/auth';
import Cart from './component/menu/Cart';
export const AppContext=createContext();
function App() 
{
  const [userdata,setUserdata]=useState([]);
  const [loading,setLoading]=useState(true); 
  useEffect(()=>{
    try
    {
      onAuthStateChanged(auth, (currentUser) => {
        setUserdata(currentUser);
        console.log(currentUser);
        setLoading(false);
    });
    }
    catch(err)
    {
       console.log(err);
    }
  })
 if(loading ) 
  {
    return (
      <div className="loading-home">
      <MoonLoader
     size={45}
     loading={true}
    color={'#FF4C29'}
     />
    </div>
   )}
  else
  {
    return (
      <div className="App"> 
        <AppContext.Provider value={{userdata,setUserdata}}>
        <Router>
          <Routes>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/" element={<Main/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/sign" element={<SignIn/>} />
            <Route path="/log" element={<Login/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </Router>
        </AppContext.Provider >
      </div>
    );
  }
  }
export default App;
