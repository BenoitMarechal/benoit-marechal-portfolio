import React from 'react';
import { useState } from 'react';
import ModalBody from '../ModalBody/ModalBody';

const ModalBackGround = (props) => {
  //declare openning parameter
  const [modalOpen, setModalOpen] = useState(props.open ? props.open : false);
  //declare modal toggle function
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  //declare modal openning function
  function openFunction(e) {
    if (e !== undefined) {
      e.preventDefault();
    }

    if (props.beforeOpenFunction) {
      props.beforeCloseFunction();
    }
    toggleModal();
    if (props.afterOpenFunction) {
      props.afterOpenFunction();
    }
  }

  //declare modal closing function
  function closeFunction(e) {
    if (e !== undefined) {
      e.preventDefault();
    }

    if (props.beforeCloseFunction) {
      props.beforeCloseFunction();
    }
    toggleModal();
    if (props.afterCloseFunction) {
      props.afterCloseFunction();
    }
  }

  //declare modal props
  let defaultProps = {
    open: modalOpen,
    closeFunction: closeFunction,
    openFunction: openFunction,
    afterCloseFunction: props.afterCloseFunction
      ? props.afterCloseFunction
      : null,
    afterOpenFunction: props.afterOpenFunction ? props.afterOpenFunction : null,
    beforeCloseFunction: props.beforeCloseFunction
      ? props.beforeCloseFunction
      : null,
    beforeOpenFunction: props.beforeOpenFunction
      ? props.beforeOpenFunction
      : null,
    btnText: 'Open Modal',
    backGroundColor: 'rgba(84, 197, 222, 0.4)',
    bodyBackGround: 'blue',
    textColor: 'white',
  };
  defaultProps.message = (
    <div className='modal-message'>
      <div className='modal-message-headline'>
        <h2 className='modal-message-headline-h2'>
          {props.headLineText
            ? props.headLineText
            : 'Customize your headline with headLineText property'}
        </h2>
        <button className='modal-btn' onClick={props.closeFunction}>
          Close <span>&#10005;</span>
        </button>
      </div>

      {props.messageText ? (
        <p className='modal-message-text'>{props.messageText}</p>
      ) : (
        <div className='modal-message-text'>
          <p>
            Customize your message with messageText property <br></br>
            <a
              className='sample-link'
              href='https://www.npmjs.com/package/bm-react-modal'
            >
              Documentation available here
            </a>
          </p>
        </div>
      )}
    </div>
  );

  let finalProps = { ...defaultProps, ...props };

  return (
    <div className='react-simple-modal-container'>
      <button
        className={
          finalProps.openBtnClass
            ? finalProps.openBtnClass + ' bm-react-modal-open-btn '
            : ' bm-react-modal-open-btn '
        }
        onClick={finalProps.openFunction}
      >
        {finalProps.btnText}
      </button>
      {finalProps.open ? <ModalBody {...finalProps}></ModalBody> : ''}
    </div>
  );
};

export default ModalBackGround;
