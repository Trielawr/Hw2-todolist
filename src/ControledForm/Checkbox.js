const Checkbox = ({ values, setValues }) => {
  
const inputCheckbox = (e) => {
    setValues({ ...values, checkbox: e.target.checked});
}  

  return (
    <div>
         <label style={{padding: '10px'}}>Checkbox</label>
        <input
          type='checkbox'
          checked={values.checkbox}
          onChange={inputCheckbox}> 
        </input>                
    </div>
  )
}

export default Checkbox;