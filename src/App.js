import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Main } from './pages/home';
import { Menu } from './pages/menu';
import {Error} from './pages/error';
import { Login } from './pages/login';
import { SignIn } from './pages/signup';
import { createContext , useEffect} from 'react';
import {auth} from "./firebase-config";

export const AppContext=createContext();
function App() {

  const [userdata,setUserdata]=useState([]);

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUserdata(user)
    })
  })
  return (
    <div className="App">
      <AppContext.Provider value={{userdata,setUserdata}}>
      <Router>
        <Routes>
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
export default App;
