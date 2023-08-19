import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Main } from './pages/home';
import { Menu } from './pages/menu';
import {Error} from './pages/error';
import { SignIn } from './pages/signin';
import { Order } from './pages/order';
import { Card } from './component/cards/card';
import { Navbar } from './component/nav/navbar';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Card/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/home" element={<Main/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/sign" element={<SignIn/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
