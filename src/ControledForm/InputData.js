const InputData = ({value}) => {
   console.log("InputData ",value);
  return (
   <div style={{textAlign: 'left'}}>
        <p>FirstName:<strong>{value.firstName}</strong></p>
        <p>Email: <strong>{value.email}</strong></p>
        <p>Checkbox: <strong>{`${value.checkbox}`}</strong></p>
          <p>Radio: <strong>{`${value.radio}`}</strong></p>  
          <p>Select: <strong>{`${value.select}`}</strong></p>  
      </div>
  )
}

export default InputData;