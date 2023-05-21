import './App.css';
import React, { useState } from 'react';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPopup from '../src/components/header/loginPopUp';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
    <div className="App">
      {/* <Header cartItems={cartItems}
      ></Header> */}
      <LoginPopup/>
    </div>

  </Router>
  );
}

export default App;
