import React, { useState } from 'react'
import InputData from './InputData';
import Checkbox from './Checkbox';
import TextsInputs from './TextsInputs';
import RadioButtons from './RadioButtons';
import CustomSelect from './CustomSelect';

const ControledForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    email: '',
    checkbox: false,
    radio: '',
    select: '',
    });
  
  const handleSubmit = (event) => {
      event.preventDefault();
      // console.log('First Name:', values.firstName, ' --- email:', values.email, 'Checkbox:', values.checkbox);
      // setValues({...values, firstName: '', email: ''});
    }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
          <TextsInputs values={values} setValues={ setValues }/>
          <Checkbox values={values} setValues={setValues} />
          <RadioButtons values={values} setValues={setValues} />
          <CustomSelect values={values} setValues={setValues} />
        <div style={{ width: '100px', margin: '0 auto', marginTop: '10px' }}>
          <input
              type='submit'
              name="submit">
          </input>    
        </div>
        </form>
        {console.log("values",values)}
        <InputData value={values} />
      </div>
   </>
  )
}

export default ControledForm;