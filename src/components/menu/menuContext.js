// MenuContext.js
import React, { createContext, useState, useEffect } from 'react';
import { MenuList } from '../../data/MenuList.js';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuListClone, setMenuListClone] = useState([]);
    useEffect(() => { setMenuListClone(MenuList); }, []);
    return (
        <MenuContext.Provider value={{ menuListClone, setMenuListClone }}>
            {children}
        </MenuContext.Provider>
    );
};
