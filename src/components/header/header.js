import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginPopup from './loginPopUp';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginData } from '../../actions/loginAction.js';

const Header = ({ cartItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const initState = {
    state: false
  }

  const SET_STATE = 'set_state'
  const setState = state =>{
    return {
      setState : !state
    }
  }
const openPopUpLogin = () => {
  dispatch(setState)
}




  return (
    <>
      <div className='buttonBackLog'>
        <button className='btn back' onClick={handleGoBack}>
          <i className="bi display-7 bi-lg bi-arrow-left"></i>
        </button>

        {isLoggedIn ? (
          <button onClick={handleLogout} className='btn back'>
            <i className="bi bi-door-open"></i>
          </button>
        ) : (
          <button onClick={openPopUpLogin} className='btn back'>
            <i className="bi bi-door-closed"></i>
          </button>
        )}
      </div>
      <LoginPopup/>

      <nav className="navbar navbar-expand-lg navbar-light bg-light narbar-icons">
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav row navbarHeader">
            <li className="nav-item active col-3">
              <Link to="/home" className="nav-link headerText">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item col-3">
              <Link to="/menu" className="nav-link headerText">
                Features
              </Link>
            </li>
            <li className="nav-item col-3">
              <Link to="/cart" className="nav-link headerText">
                Pricing
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item col-3">
                <Link to="/table" className="nav-link headerText">
                  Summary
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
