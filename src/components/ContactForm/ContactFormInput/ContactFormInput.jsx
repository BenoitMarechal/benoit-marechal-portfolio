import React from 'react';

const ContactFormInput = (props) => {
  const { label, onChange, errorMessage, ...inputProps } = props;

  return (
    <div>
      <label htmlFor={props.id}>{props.placeholder}</label>
      {props.name === 'message' ? (
        <textarea
          {...inputProps}
          onChange={onChange}
          className={'input'}
          cols='30'
          rows='10'
          minlength={5}
        ></textarea>
      ) : (
        <input {...inputProps} onChange={onChange} className={'input'} />
      )}
      <span className='error'>{errorMessage}</span>
    </div>
  );
};

export default ContactFormInput;