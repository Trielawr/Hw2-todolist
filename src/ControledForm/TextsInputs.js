import {debounce} from 'lodash';

const TextsInputs = ({ values, setValues }) => {
    
  
  const inputFirstName = debounce((e) => {
    setValues({ ...values, firstName: e.target.value });
    console.log(values.firstName);
  }, 500);

  const inputEmail = (e) => {
    setValues({...values, email: e.target.value});
  }

    return (
    <>
      <div style={{padding: '10px'}}>
          <label style={{padding: '10px'}}>Name</label>
          <input
            type='text'
            value={values.firstName}
            onChange={ inputFirstName }
            placeholder='First Name'> 
          </input>          
      </div>
      <div style={{padding: '10px'}}>
          <label style={{padding: '10px'}}>Email</label> 
          <input
            type='email'
            value={values.email}
            onChange={inputEmail}
            placeholder='email'>
            </input> 
       </div>        
    </>   
  )
}

export default TextsInputs;