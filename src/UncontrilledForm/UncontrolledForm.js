import React, {useRef} from 'react'

const UncontrolledForm = () => {

    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formRef.current.FirstName.value);
        console.log(formRef.current.email.value);
        formRef.current.reset();
    }

    
  return (
      <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor='FirstName'>Name</label>
          <input type='text' name='FirstName' id='FirstName'></input>    
         <label htmlFor='email'>Email</label> 
          <input type='email' name='email' id='email'></input>    
          <button type='submit'>Submit</button>
    </form>
  )
}

export default UncontrolledForm;