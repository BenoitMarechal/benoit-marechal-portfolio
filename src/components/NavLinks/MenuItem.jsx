import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuItem = (props) => {
  return (
    <NavLink className={'navLink '} to={props.link} onClick={props.onClick}>
      {props.text}
    </NavLink>
  );
};

export default MenuItem;
