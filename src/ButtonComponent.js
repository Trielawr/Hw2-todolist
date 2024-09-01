import React from 'react'
import styles from './Components.module.css'

function ButtonComponent({aditionalclassName, type, onClick, text}) {
  return (
    <button
      className={ `${styles.button} ${styles.aditionalclassName}` }
      type={ type }
      onClick={ onClick }>
      { text }</button>
    )
}

export default ButtonComponent