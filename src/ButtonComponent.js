import React from 'react'


function ButtonComponent({ aditionalclassName, type, onClick, text }) {
  
  console.log(`button ${aditionalclassName}`);
  return (
    <button
      className={ `button ${aditionalclassName}` }
      type={ type }
      onClick={ onClick }>
      { text }</button>
    )
}

export default ButtonComponent