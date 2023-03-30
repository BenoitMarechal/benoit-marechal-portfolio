import React, { useState } from 'react';

const ContactFormInput = (props) => {
  const { label, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <label htmlFor={props.id}>{props.placeholder}</label>
      {props.name === 'message' ? (
        <textarea
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          className={'input'}
          cols='30'
          rows='10'
          minLength={5}
        ></textarea>
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          className={'input'}
        />
      )}
      <span className='error'>{errorMessage}</span>
    </div>
  );
};

export default ContactFormInput;
