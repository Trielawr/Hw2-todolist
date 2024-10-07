import React from 'react';
import './ButtonComponent.scss'


function ButtonComponent({ aditionalclassName, disabled,  type, onClick, text }) {
  return (
    <button
      className={`button ${aditionalclassName}`}
      disabled={ disabled }
      type={ type }
      onClick={ onClick }>
      { text }</button>
    )
}

export default ButtonComponent