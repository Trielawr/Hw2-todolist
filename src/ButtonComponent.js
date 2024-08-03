import React from 'react';

function ButtonComponent({ additionalClassName, disabled, type, onClick, text }) {
  return (
    <button
      className={ `btn ${additionalClassName || ''}` }
      disabled={ disabled || null }
      type={ type || 'button' }
      onClick={ onClick }
    >{ text }</button>
  )
}

export default ButtonComponent;
