import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import { setLoginData } from '../../actions/loginAction.js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function LoginPopUp({ close }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, isLogin] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    
    };
    const customerDTO = {
        userName: username,
        password: password,
    };

    axios.post('http://localhost:8081/http://localhost:8080/api/buy', customerDTO)
            .then(response => {
                isLogin(true);
            })
            .catch(error => {
                console.error(error);
            });

    return (
        <div>
            <div className="model p-3">
                <h4>Đăng nhập</h4>
                <form
                    onSubmit={handleLoginSubmit}
                >
                    <div>
                        <label>Tên đăng nhập:</label>
                        <input
                            className="dangNhap mb-3"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className='d-flex'>
                        <div className='lableMK'><label >Mật khẩu:</label></div>
                        <input
                            className="matKhau mb-3"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit">Đăng nhập</Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopUp