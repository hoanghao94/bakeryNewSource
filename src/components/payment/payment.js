import React, { useState, useContext } from 'react';
import { MenuContext } from './menuContext';
function Payment() {
    const { menuListClone, setMenuListClone } = useContext(MenuContext);
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);

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
                                        <div className='cart-Item' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }}></div>
                                        <h6>{item.name}:</h6> <p className=' cart-price'>
                                            {item.quantity} * {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                                        </p>
                                        <div className='cart-items-function'>
                                            {/* <button className='add-remove btn btn-success' onClick={() => handleAddItem(item.image, item.name, item.price)}>+</button> */}
                                            {/* <button className='add-remove btn btn-danger' onClick={() => handleRemoveProduct(item.image, item.name, item.price)}>-</button> */}
                                        </div>
                                    </div>
                                );
                            }
                        })}

                    </div>
                </div>
            </div>
            <div className='col-3 total-price' >
                <div className='cart-items-total-price-name'>
                    Total price
                    <div className='cart-Items-total-price'>{formattedPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;