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
  // useEffect(() => {
  //   console.log();
  // });
  return (
    <fieldset
      className={'section bg-tertiary-light-10 ' + (props.class + '__section')}
    >
      <legend
        onClick={toggleOpen}
        onTouchStart={toggleOpen}
        className={'section__legend ' + (props.class + '__section__legend')}
      >
        {props.title + ' '}
        {open ? (
          <VscTriangleUp className='section__legend__icon' />
        ) : (
          <VscTriangleDown className='section__legend__icon' />
        )}
      </legend>{' '}
      {open ? props.content : ''}
    </fieldset>
  );
};

export default FieldSection;
