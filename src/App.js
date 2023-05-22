import './App.css';
import React, { useState } from 'react';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/home.js';
import Menu from './components/menu/menu.js'
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <Header cartItems={cartItems}
      ></Header>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path='/menu' element={<Menu/>} />
    </Routes>
    </Router>
  );
}

export default App;
