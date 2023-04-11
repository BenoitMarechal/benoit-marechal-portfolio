import React from 'react';

const ResetSearchButton = (props) => {
  function handleClick() {
    props.onClick();
  }
  return (
    <button onClick={handleClick} className='resetSearchButton'>
      Enlever la sélection
    </button>
  );
};

export default ResetSearchButton;
