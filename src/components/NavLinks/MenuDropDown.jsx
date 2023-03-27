import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuDropDown = (props) => {
  const [open, setOpen] = useState(false);
  function toggleActive() {
    setOpen(!open);
  }

  return (
    <div className='menuDropDown'>
      <NavLink className=' menuDropDown__main ' to={props.link}>
        {props.text}
      </NavLink>
      <i className='fa-solid fa-caret-down color-secondary menuDropDown__icon '></i>
    </div>
  );
};

export default MenuDropDown;
