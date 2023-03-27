import React from 'react';
import navBarContent from '../../assets/navLinks.json';
import MenuDropDown from '../NavLinks/MenuDropDown';
import MenuItem from '../NavLinks/MenuItem';
import './header.scss';
const Header = () => {
  return (
    <header className='bg-gradient'>
      <nav>
        {navBarContent.map((elt, index) => {
          return elt.type === 'regular' ? (
            <MenuItem {...elt} key={index}></MenuItem>
          ) : (
            <MenuDropDown {...elt} key={index}></MenuDropDown>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
