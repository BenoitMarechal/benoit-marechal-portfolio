import React from 'react';
import { NavLink } from 'react-router-dom';
const MenuItem = (props) => {
    return (
        <NavLink to={props.link}>{props.text}</NavLink>
    );
};

export default MenuItem;