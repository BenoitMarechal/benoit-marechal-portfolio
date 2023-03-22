import React from 'react';
import { navBarContent } from '../../assets/navLinks';
import MenuItem from '../NavLinks/MenuItem';
import './header.scss';
const Header = () => {
  return (
    <header>
      <nav>
        {navBarContent.map((elt) => {
          return (
            <MenuItem {...elt} key={navBarContent.indexOf(elt)}></MenuItem>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
