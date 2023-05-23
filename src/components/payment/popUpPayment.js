import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Button } from "react-bootstrap";
import '../../css/menu.css';

function PopUpPayment({cartItems}) {
    const [buyerName, setBuyerName] = useState("");
    const [phone, setPhone] = useState("");

    const handleBuySubmit = (e) => {
        e.preventDefault();
        const listCakeDTO = cartItems.map((cartItem) => {
            const CakeDTO = {
                nameCake: cartItem.name,
                price: cartItem.price,
                quantity: cartItem.quantity,
            };
            return CakeDTO;
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

        axios.post('http://localhost:8080/api/buy', data).then
            (response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="model ">
            <h4>Mua Hàng</h4>
            <form onSubmit={handleBuySubmit}>
                <div>
                    <label>Tên người mua:</label>
                    <input
                        type="text"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                    />
                </div>
                <div>
                    <label>SĐT:*</label>
                    <input
                        type="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" onClick={handleBuySubmit}>Mua</Button>
            </form>
        </div>)
}

export default PopUpPayment