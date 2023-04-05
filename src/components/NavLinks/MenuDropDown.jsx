import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuDropDown = (props) => {
  //console.log(props);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(props.text);

  useEffect(() => {
    // console.log(current);
  }, [current]);

  function toggleOpen() {
    setOpen(!open);
  }
  function handleClose(string) {
    setCurrent(string);
    toggleOpen();
  }

  return (
    <div className='menuDropDown'>
      <div className='menuDropDown__topPannel'>
        <NavLink
          className={' menuDropDown__topPannel__main ' + props.className}
          to={props.link}
        >
          {current}
        </NavLink>
        <i
          className='fa-solid fa-caret-down color-secondary menuDropDown__topPannel__icon '
          onClick={toggleOpen}
        ></i>
      </div>
      {open
        ? props.sublinks.map((sublink, index) => (
            <div
              className='color-secondary'
              onClick={() => handleClose(sublink.text)}
              key={index}
            >
              {sublink.text}
            </div>
          ))
        : ''}
    </div>
  );
};

export default MenuDropDown;
