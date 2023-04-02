import React from 'react';

const HookInput = (props) => {
  const { id, label, type, placeholder, errorContent, registerRef, ...rest } =
    props;

  //console.log(props);
  return (
    <div className='contactForm__'>
      <label htmlFor={props.id}>{label}</label>
      {type === 'textArea' ? (
        <textarea
          name={id}
          id={id}
          placeholder={placeholder}
          rows='10'
          {...registerRef}
        ></textarea>
      ) : (
        <input
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          {...registerRef}
        ></input>
      )}
      {errorContent !== undefined ? <p>{errorContent}</p> : ''}
    </div>
  );
};

export default HookInput;
