import './App.css';
import './index.css';
import React, {useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Main } from './pages/home';
import { Menu } from './pages/menu';
import { Error } from './pages/error';
import { onAuthStateChanged } from 'firebase/auth';
import { Navbar } from './component/nav/navbar';
import { auth } from "./firebase-config";
import { CreateSignin } from './component/forms/register';
import { CreateLogin } from './component/forms/logpage';
import  Cart  from './component/menu/cart';
import {CartContextProvider} from './component/context/CartContextProvider';

function App() {
  const [userdata, setUserdata] = useState([]);
  const AppContext = createContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserdata(currentUser);
      console.log(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

    return (
      <div className="App">
          <AppContext.Provider value={{ userdata, setUserdata }}>
          <CartContextProvider>
            <Router>
              <Navbar /> 
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Main />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/sign" element={<CreateSignin/>} />
                <Route path="/log" element={<CreateLogin/>} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Router>
            </CartContextProvider>
          </AppContext.Provider>
      </div>
    );
  }
export default App;
