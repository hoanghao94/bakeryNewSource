import React, { useState, useContext, useEffect } from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { MenuContext } from '../../components/menu/menuContext';

function LoginPopUp({ }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { setIsLoggedIn } = useContext(MenuContext);

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const customerDTO = {
            userName: username,
            password: password,
        };

        axios.post('http://localhost:8081/http://localhost:8080/api/check-login-accounts', customerDTO)
            .then(response => {
                setLoginSuccess(true);
                setIsLoggedIn(true);
                setErrorMessage('');
            })
            .catch(error => {
                setLoginSuccess(false);
                setErrorMessage('Sai tên đăng nhập hoặc mật khẩu');
            });
    };

    return (
        <div>
            <div className="model p-3">
                {loginSuccess ? (
                    <div className='text-success'>
                        <h4>Đăng nhập thành công</h4>
                    </div>
                ) : (
                    <div>
                        <h4>Đăng nhập</h4>
                        <form onSubmit={handleLoginSubmit}>
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
                                <div className='lableMK'><label>Mật khẩu:</label></div>
                                <input
                                    className="matKhau mb-3"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit">Đăng nhập</Button>
                            {errorMessage && <p>{errorMessage}</p>}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPopUp;
