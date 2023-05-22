import React from 'react'
import { Button } from "react-bootstrap";
import '../../css/menu.css';

function menuItem({ image, name, price, quantity }) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return (
    <div className="menuItem col-5 ">
      <div className="menuItem">
        <div className='item'
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        ></div>
        <p className='d-flex justify-content-center '>
          <h6>{name}: </h6> <p> {formattedPrice}</p>
        </p>
        <Button
          className="btn btn-light border border-secondary"
          id={name}
        >
          {quantity !== 1 && <>Mua</>}
          {(quantity === 1) && <>Đã mua!</>}
        </Button>
      </div>
    </div>
  )
}

export default menuItem