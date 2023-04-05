import React from 'react';
import FocusTrap from 'focus-trap-react';

const ModalBody = (props) => {
  function handleKeyDown(e) {
    e.preventDefault();
    if (e.key === 'Escape' || e.key === 'Enter') {
      props.closeFunction(e);
    }
  }
  let bgStyle = {
    display: props.open ? 'flex' : 'none',
    background: props.backGroundColor,
  };
  let bodyStyle = {
    color: props.textColor,
    background: props.bodyBackGround,
  };
  return (
    <FocusTrap active={props.open}>
      <div className=' modal__bg' tabIndex='0' onKeyDown={handleKeyDown}>
        <div className='modal__bg__body modal__bg__body__style'>
          {props.message}
        </div>
      </div>
    </FocusTrap>
  );
};

export default ModalBody;
