import React from 'react';

const Modal = (props) => {

  return <div className='modal__container'>
    {props.openParam?<div className="modal__body">:"" }


</div>
  </div>;
};

export default Modal;
