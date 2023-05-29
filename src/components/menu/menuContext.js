import React, { createContext, useState, useEffect } from 'react';
import { MenuList } from '../../data/MenuList.js';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuListClone, setMenuListClone] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
        setMenuListClone(MenuList);
    }, []);

    return (
        <MenuContext.Provider value={{ menuListClone, setMenuListClone, isLoggedIn, setIsLoggedIn }}>
            {children}
        </MenuContext.Provider>
    );
};
