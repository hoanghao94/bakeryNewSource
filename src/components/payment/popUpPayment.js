import axios from 'axios';
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import '../../css/menu.css';

function PopUpPayment({ cartItems }) {
    const [buyerName, setBuyerName] = useState("");
    const [phone, setPhone] = useState("");
    const [isBuy, setIsBuy] = useState(false);

    const handleBuySubmit = (e) => {
        e.preventDefault();
        const listCakeDTO = [];
        cartItems.forEach((cartItem) => {
          if (cartItem.quantity !== undefined && cartItem.quantity !== 0) {
            const CakeDTO = {
              nameCake: cartItem.name,
              price: cartItem.price,
              quantity: cartItem.quantity,
            };
            listCakeDTO.push(CakeDTO);
          }
        });
        
        const customerDTO = {
            name: buyerName,
            phoneNumber: phone,
            dateBuy: Date
        };

        const data = {
            cakeDTOList: listCakeDTO,
            customerDTO: customerDTO
        };

        axios.post('http://localhost:8081/http://localhost:8080/api/buy', data)
            .then(response => {
                setIsBuy(true);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setBuyerName("");
                setPhone("");
            });
    }

    return (
        <>
            <div className="model p-3 ">
                {isBuy === false ? (
                    <div>
                        <h4>Mua Hàng</h4>
                        <form onSubmit={handleBuySubmit}>
                            <div>
                                <label>Tên người mua:</label>
                                <input
                                    className='mb-2'
                                    type="text"
                                    value={buyerName}
                                    onChange={(e) => setBuyerName(e.target.value)}
                                />
                            </div>
                            <div className='d-flex'>
                                <div className='lable'><label>SĐT:*</label></div>
                                <input
                                    className='mb-2'
                                    type="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit">Mua</Button>
                        </form>
                    </div>
                ) : (
                    <h3 className='text-danger'>Mua thành công</h3>
                )}
            </div>
        </>
    );
}

export default PopUpPayment;
