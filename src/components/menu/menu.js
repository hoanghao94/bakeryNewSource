import React, { createContext, useState, useEffect,useContext  } from 'react';
import MenuItem from './menuItem.js';
import { MenuContext } from './menuContext.js';
function Menu() {
    const { menuListClone } = useContext(MenuContext);
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
