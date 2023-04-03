import React from 'react';

const ContactInput = (props) => {
  const { id, label, type, placeholder, errorContent, registerRef } = props;

  return (
    <div className='contactForm__inputContainer'>
      <label className='contactForm__inputContainer__label' htmlFor={props.id}>
        {label}
      </label>
      {type === 'textArea' ? (
        <textarea
          name={id}
          id={id}
          placeholder={placeholder}
          rows='10'
          {...registerRef}
          className={
            errorContent !== undefined
              ? 'contactForm__inputContainer__input contactForm__inputContainer__input__textarea error'
              : 'contactForm__inputContainer__input contactForm__inputContainer__input__textarea'
          }
        ></textarea>
      ) : (
        <input
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          className={
            errorContent !== undefined
              ? 'contactForm__inputContainer__input contactForm__inputContainer__input__textarea error'
              : 'contactForm__inputContainer__input contactForm__inputContainer__input__textarea'
          }
          {...registerRef}
        ></input>
      )}
      {errorContent !== undefined ? (
        <p className='contactForm__inputContainer__error'>{errorContent}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default ContactInput;
