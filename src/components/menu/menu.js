import React, { createContext, useState, useEffect } from 'react';
import MenuItem from './menuItem.js';
import { MenuList } from '../../data/MenuList.js';

function Menu() {
    const [menuListClone, setMenuListClone] = useState([]);
    setMenuListClone(MenuList);
    return (
        <div>
            <div className='row'>
                {menuListClone.map((menuItem, key) => {
                    return (
                        <MenuItem
                            className='container'
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                            quantity={menuItem.quantity}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;
