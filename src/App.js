import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MenuProvider, MenuContext } from './components/menu/menuContext';
import Header from './components/header/header';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Payment from './components/payment/payment';
import Summary from './components/summary/summary';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(MenuContext);
  setIsLoggedIn(true);

  return (
    <Router>
      <MenuProvider>
        <Header />
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/table" element={isLoggedIn ? <Summary /> : <Navigate to="/home" />} />
        </Routes>
      </MenuProvider>
    </Router>
  );
}

export default App;
