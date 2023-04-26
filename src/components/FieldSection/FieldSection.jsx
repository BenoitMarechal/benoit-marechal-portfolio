import React, { useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

const FieldSection = (props) => {
  // console.log('props fieldset');
  // console.log(props);
  const [open, setOpen] = useState(undefined);
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

      {open === undefined ? (
        ''
      ) : (
        <div
          className={
            open
              ? 'section__content__open ' +
                props.class +
                '__section__content__open'
              : 'section__content__closed ' +
                props.class +
                '__section__content__closed'
          }
        >
          {props.content}
        </div>
      )}
      {/* <div
        className={
          open
            ? 'section__content__open ' +
              props.class +
              '__section__content__open'
            : 'section__content__closed ' +
              props.class +
              '__section__content__closed'
        }
      >
        {props.content}
      </div> */}
      {/* {open ? props.content : ''} */}
    </div>
  );
};

export default FieldSection;
