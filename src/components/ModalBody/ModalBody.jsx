import React from 'react';
import FocusTrap from 'focus-trap-react';

const ModalBody = (props) => {
  function handleKeyDown(e) {
    e.preventDefault();
    if (e.key === 'Escape' || e.key === 'Enter') {
      console.log('props.closeFunction');
      console.log(props.closeFunction);
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
      <div
        className=' modal-bg'
        tabIndex='0'
        onKeyDown={handleKeyDown}
        style={{ ...bgStyle, ...props.bgStyle }}
      >
        <div
          className='modal-body modal-body-style'
          style={{ ...bodyStyle, ...props.bodyStyle }}
        >
          {props.message}
        </div>
      </div>
    </FocusTrap>
  );
};

export default ModalBody;
