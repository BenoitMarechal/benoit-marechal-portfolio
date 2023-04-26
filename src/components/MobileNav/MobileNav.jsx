import React, { useState } from 'react';
//import { navBarContent } from '../../assets/navLinks.json';
import navBarContent from '../../assets/navLinks.json';
import MenuItem from '../NavLinks/MenuItem';
import MenuDropDown from '../NavLinks/MenuDropDown';
import { ImCross } from 'react-icons/im';
import { VscThreeBars } from 'react-icons/vsc';
import FocusTrap from 'focus-trap-react';

const MobileNav = (props) => {
  //console.log(props);
  /////////////////////////////////
  // DECLARING FOR MODAL
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  return (
    <div className='header__mobileNav'>
      <button className='header__mobileNav__button' onClick={toggleOpen}>
        <VscThreeBars />
      </button>
      {open ? (
        <div className='header__mobileNav__background'>
          <FocusTrap>
            <nav className='header__mobileNav__background__nav'>
              <button
                tabIndex='0'
                className='header__mobileNav__background__nav__closeBtn'
                onClick={toggleOpen}
              >
                <ImCross />
              </button>
              {navBarContent.map((elt, index) => {
                return elt.type === 'regular' ? (
                  <MenuItem
                    {...elt}
                    key={index}
                    onClick={toggleOpen}
                  ></MenuItem>
                ) : (
                  <MenuDropDown {...elt} key={index}></MenuDropDown>
                );
              })}
            </nav>
          </FocusTrap>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default MobileNav;
