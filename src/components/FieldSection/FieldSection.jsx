import React, { useEffect, useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
// notes pour implementer click outside
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

const FieldSection = (props) => {
  // console.log('props fieldset');
  // console.log(props);
  const [open, setOpen] = useState(true);
  function toggleOpen() {
    setOpen(!open);
  }
  return (
    <div
      className={'section bg-tertiary-light-10 ' + (props.class + '__section')}
    >
      <button
        onClick={toggleOpen}
        // onTouchStart={toggleOpen}
        className={'section__title ' + (props.class + '__section__title')}
      >
        {props.title + ' '}
        {open ? (
          <VscTriangleUp className='section__title__icon' />
        ) : (
          <VscTriangleDown className='section__title__icon' />
        )}{' '}
      </button>
      {open ? props.content : ''}
    </div>
  );
};

export default FieldSection;
