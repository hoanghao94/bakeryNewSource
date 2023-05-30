import axios from 'axios';
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import '../../css/menu.css';

function PopUpPayment({ cartItems }) {
    const [buyerName, setBuyerName] = useState('');
    const [phone, setPhone] = useState('');
    const [isBuy, setIsBuy] = useState(false);

    const handleBuySubmit = (e, paymentType) => {
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
            dateBuy: Date,
        };

        const data = {
            cakeDTOList: listCakeDTO,
            customerDTO: customerDTO,
        };

        if (paymentType === 'tra-truoc') {
            axios
                .get('http://localhost:8081/http://localhost:8080/api/payment/create_payment', data)
                .then((response) => {
                    const { url } = response.data;
                    setIsBuy(true);
                    window.open(url, '_blank');
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setBuyerName('');
                    setPhone('');
                });
        } else {
            axios
                .post('http://localhost:8081/http://localhost:8080/api/buy', data)
                .then((response) => {
                    setIsBuy(true);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setBuyerName('');
                    setPhone('');
                });
        }
    };

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
                                    className="mb-2"
                                    type="text"
                                    value={buyerName}
                                    onChange={(e) => setBuyerName(e.target.value)}
                                />
                            </div>
                            <div className="d-flex">
                                <div className="lable">
                                    <label>SĐT:*</label>
                                </div>
                                <input
                                    className="mb-2"
                                    type="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-flex">
                                <Button type="submit" onClick={(e) => handleBuySubmit(e, 'tra-truoc')}>
                                    Mua Trả Trước
                                </Button>
                                <Button type="submit" onClick={(e) => handleBuySubmit(e, 'tra-sau')}>
                                    Mua Trả Sau
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <h3 className="text-danger">Mua thành công</h3>
                )}
            </div>
        </>
    );
}

export default PopUpPayment;
