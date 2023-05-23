import React, { useState, useContext } from 'react';
import { MenuContext } from './menuContext';
import { Button } from "react-bootstrap";
import '../../css/menu.css';
import Popup from "reactjs-popup";
import DetailPopUp from './detailPopUp';

function MenuItem({ image, name, price, quantity }) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", }).format(price);
  const { menuListClone, setMenuListClone } = useContext(MenuContext);
  const handleBuyClick = () => {
    if (quantity > 0) {
      setMenuListClone(
        menuListClone.map((product) => {
          if (name === product.name) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        })
      );
    } else {
      setMenuListClone(
        menuListClone.map((product) => {
          if (name === product.name) {
            return { ...product, quantity: 1 };
          }
          else {
            return product;
          }
        })
      );
    };
  };

  return (
    <div className="menuItem col-5 ">
      <Popup modal trigger={
        <div className='item'
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        ></div>
      }>
        {close => <DetailPopUp name={name} image={image} quantity={quantity} handleBuyClick={handleBuyClick} close={close} />}
      </Popup>

      <div className='d-flex justify-content-center '>
        <h6>{name}: </h6> <p> {formattedPrice}</p>
      </div>
      <Button
        className="btn btn-light border border-secondary"
        onClick={handleBuyClick}
      >
        {(quantity === 0 || !quantity) ? "Mua" : "Đã mua!"}
      </Button>




    </div>
  )
}

export default MenuItem