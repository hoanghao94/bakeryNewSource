import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import { setLoginData } from '../../actions/loginAction.js';
import { useSelector, useDispatch } from 'react-redux';

function LoginPopUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [showModal, setShowModal] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const dispatch = useDispatch();

    // const handleCloseModal = () => {
    //     setShowModal(false);
    // };
    // const handleLoginSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(setLoginData(loginData.username, loginData.password));
    //     setIsLoggedIn(true);
    //     closeLoginModal();
    // };
    // const loginData = useSelector(state => state.login);

    // const closeLoginModal = () => {
    //     setShowModal(false);
    //   };

    return (
        <Popup
            modal
            closeOnDocumentClick
            className="modal"
            contentStyle={{ maxWidth: "600px", width: "90%" }}
            // open={showModal}
            // onClose={handleCloseModal}
        >
            <div className="model">
                <h4>Đăng nhập</h4>
                <form 
                // onSubmit={handleLoginSubmit}
                >
                    <div>
                        <label>Tên đăng nhập:</label>
                        <input
                            className="dangNhap"
                            type="text"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            // required
                        />
                    </div>
                    <div>
                        <label>Mật khẩu:</label>
                        <input
                            className="matKhau"
                            type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            // required
                        />
                    </div>
                    <Button type="submit">Đăng nhập</Button>
                </form>
            </div>
        </Popup>
    );
};

export default LoginPopUp