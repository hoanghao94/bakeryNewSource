import React, { useState, useContext } from 'react';
import { MenuContext } from './../menu/menuContext';
import '../../css/menu.css';
import Popup from "reactjs-popup";
import PopUpPayment from './popUpPayment';

function Payment() {
    const { menuListClone, setMenuListClone } = useContext(MenuContext);
    let totalPrice = 0;
    menuListClone.map((product) => {
        if (product.quantity) {
            totalPrice = totalPrice + product.quantity * product.price;
        }
    })
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
    const handleAddItem = (image, name, price, quantity) => {
        setMenuListClone(
            menuListClone.map((product) => {
                if (name === product.name) {
                    return { ...product, quantity: quantity + 1 };
                } else {
                    return product;
                }
            })
        );
    }
    const handleRemoveProduct = (image, name, price, quantity) => {
        setMenuListClone(
            menuListClone.map((product) => {
                if (name === product.name) {
                    return { ...product, quantity: quantity - 1 };
                } else {
                    return product;
                }
            })
        );
    }
    return (
        <div className='row' >
            <div className='col-6 cart'>
                <div className='cart-items'>
                    {
                        menuListClone.length === 0 && (
                            <div className='cart-items-empty'>Empty
                            </div>
                        )
                    }
                    <div>
                        {menuListClone.map((item) => {
                            if (item.quantity) {
                                return (
                                    <div key={item.name} className='menuItem'>
                                        <div className='item' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }}></div>
                                        <div className='d-flex justify-content-center '>
                                            <h6>{item.name}: </h6> &nbsp; <p className=' cart-price'>
                                                {item.quantity} * {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                                            </p>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <button className=' btn btn-success' onClick={() => handleAddItem(item.image, item.name, item.price, item.quantity)}>+</button>
                                            <button className=' btn btn-danger' onClick={() => handleRemoveProduct(item.image, item.name, item.price, item.quantity)}>-</button>
                                        </div>
                                    </div>
                                );
                            }
                        })}

                    </div>
                </div>
            </div>
            <div className='col-3 total-price d-flex align-items-start flex-column align-items-center mt-4' >
                <div className='cart-items-total-price-name'>
                    Total price
                    <div className='cart-Items-total-price'>{formattedPrice}
                    </div>
                </div>

                <Popup modal trigger={
                    <button
                        className=" btn btn-primary mt-2">
                        Mua
                    </button>
                }>
                    {close => <PopUpPayment cartItems={menuListClone}  close={close} />}
                </Popup>




            </div>
        </div>
    )
}

export default Payment;