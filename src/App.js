import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Main } from './pages/home';
import { Menu } from './pages/menu';
import {Error} from './pages/error';
import { Navbar } from './component/nav/navbar';
import { Login } from './pages/login';
import { SignIn } from './pages/signup';
// import { Footer } from './component/footer';
// import {auth} from "./firebase-config"
// import {createUserWithEmailAndPassword} from 'firebase/auth';

function App() {
  // const [registerEmail,setRegisterEmail]=useState("");
  // const [registerPassword,setRegisterPassword]=useState("");
  // const [loginEmail,setLoginEmail]=useState("");
  // const [loginPassword,setLoginPassword]=useState("");
  return (
    <div className="App">
      <Router>
      <Navbar/>
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
    </div>
  );
}
export default App;
