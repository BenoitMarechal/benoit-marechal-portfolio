import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuItem = (props) => {
  return (
    <NavLink className='navLink' to={props.link}>
      {props.text}
    </NavLink>
  );
};

export default MenuItem;
