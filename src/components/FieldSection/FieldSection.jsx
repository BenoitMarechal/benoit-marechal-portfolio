import React from 'react';

const FieldSection = (props) => {
  return (
    <fieldset
      className={'section bg-tertiary-light-10 ' + (props.class + '__section')}
    >
      <legend
        className={'section__legend ' + (props.class + '__section__legend')}
      >
        {props.title}
      </legend>
      {props.content}
    </fieldset>
  );
};

export default FieldSection;
