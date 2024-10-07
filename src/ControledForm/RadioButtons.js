import React from 'react'

const RadioButtons = ({values, setValues}) => {

  const inputRadio = (e) => {
    setValues({...values, radio: e.target.name});
  }

  
  return (
    <>
      <div style={{padding: '10px'}}>
          <label style={{padding: '10px'}}>Radio 1</label>
          <input
                  type='radio'
                  checked={ values.radio === 'radio1'}
                  onChange={inputRadio}
                  name='radio1'> 
          </input>          
      </div>
      <div style={{padding: '10px'}}>
          <label style={{padding: '10px'}}>Radio 2</label> 
          <input
                  type='radio'
                  checked={ values.radio === 'radio2'}
                  onChange={inputRadio}
                  name='radio2'>
            </input> 
       </div>        
    </>   
  )
}

export default RadioButtons;