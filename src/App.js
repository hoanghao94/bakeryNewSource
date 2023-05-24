import './App.css';
import React, { useState } from 'react';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/home.js';
import Menu from './components/menu/menu.js'
import { MenuProvider } from './components/menu/menuContext';
import Payment from './components/payment/payment';
import Summary from './components/summary/summary';
function App() {

  return (
    <Router>
      <MenuProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/table" element={<Summary />} />
        </Routes>
      </MenuProvider>
    </Router>
  );
}


export default App;
