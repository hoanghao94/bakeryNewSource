import React, { useState, useEffect } from 'react';
import '../../css/table.css';
function Summary() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const proxyUrl = 'http://localhost:8081/'; 
        const apiUrl = 'http://localhost:8080/api/buying'; 
        const response = await fetch(proxyUrl + apiUrl);
        const jsonData = await response.json();
        setData(jsonData);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Date Buy</th>
                    <th>Cake Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((customer) =>
                    customer.cakeDTOList.map((cake, index) => (
                        <tr key={cake.id}>
                            {index === 0 && <td rowSpan={customer.cakeDTOList.length}>{customer.customerDTO.name}</td>}
                            {index === 0 && (
                                <td rowSpan={customer.cakeDTOList.length}>{customer.customerDTO.phoneNumber}</td>
                            )}
                            {index === 0 && <td rowSpan={customer.cakeDTOList.length}>{customer.customerDTO.dateBuy}</td>}
                            <td>{cake.nameCake}</td>
                            <td>{cake.quantity}</td>
                            <td>{cake.price}</td>
                            <td>{cake.quantity * cake.price}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default Summary;
