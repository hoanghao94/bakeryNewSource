import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginPopup from './loginPopUp';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import Popup from "reactjs-popup";
import '../../css/header.css';
import { MenuContext } from '../../components/menu/menuContext';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [numberOfItem, setNumberOfItem] = useState(0);
  const { menuListClone } = useContext(MenuContext);
  useEffect(() => {
    let numberOfQuantity = 0;
    menuListClone.map((product) => {
      if (product.quantity) {
        numberOfQuantity++;
      }
    });
    setNumberOfItem(numberOfQuantity);
  }, [menuListClone]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const initState = {
    state: false
  }

  const SET_STATE = 'set_state';
  const setState = state => {
    return {
      setState: !state
    }
  };




  return (
    <>
      <nav className="navbar navbar-light bg-light narbar-icons">
        <div className='buttonBackLog'>
          <button className='btn back' onClick={handleGoBack}>
            <i className="bi display-7 bi-lg bi-arrow-left"></i>
          </button>
          {isLoggedIn ? (
            <Popup modal trigger={<button className='btn back'>
              <i className="bi bi-door-open"></i>
            </button>}>
              {close => <LoginPopup close={close} />}
            </Popup>
          ) : (
            <button onClick={handleLogout} className='btn back'>
              <i className="bi bi-door-closed"></i>
            </button>
          )}
        </div>
        <h5 className='number'>Xịn Shop</h5>
        <div>
          <form className="form-inline">
            <button className='btn shopping-cart'>
              <Link to="/cart">
                <i className="fa fa-shopping-cart "></i>
              </Link>
              <Link to="/cart" className="number mu" >
                {numberOfItem !== 0 ? numberOfItem : "0"}
              </Link>
            </button>
          </form>
        </div>
      </nav>
      <nav className="navbar navbar-light bg-light" >
        <div className="navbar-collapse" >
          <ul className="navbar-nav row navbarHeader" id="header">
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
              <Link to="/payment" className="nav-link headerText">
                Payment
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
