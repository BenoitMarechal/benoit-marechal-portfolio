import React, { useEffect, useState } from 'react';
import navBarContent from '../../assets/navLinks.json';
import MenuDropDown from '../NavLinks/MenuDropDown';
import MenuItem from '../NavLinks/MenuItem';
import MobileNav from '../MobileNav/MobileNav';

const Header = () => {
  return (
    <header className='bg-gradient header'>
      <nav className='header__nav'>
        {navBarContent.map((elt, index) => {
          return elt.type === 'regular' ? (
            <MenuItem {...elt} key={index}></MenuItem>
          ) : (
            <MenuDropDown
              className='desktop'
              {...elt}
              key={index}
            ></MenuDropDown>
          );
        })}
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
