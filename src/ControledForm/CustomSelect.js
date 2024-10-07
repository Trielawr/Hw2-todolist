const CustomSelect = ({ values, setValues }) => {
 
    const selectOptions = [
        { id: 1, value: 'options 1' },
        { id: 2, value: 'options 2' },
        { id: 3, value: 'options 3' },
        { id: 4, value: 'options 4' },
        { id: 5, value: 'options 5' },
        { id: 6, value: 'options 6' },
]

    const handleSelectChange = (e) => {
        setValues({ ...values, select: e.target.value});
  }  

  return (
      <div style={{padding: '10px'}}>
        <label style={{padding: '10px'}}>Select</label>
          <select name="select" onChange={handleSelectChange}> 
          {selectOptions.map((options) => <option key={options.id}>{options.value}</option>)}
        </select>          
      </div>
  )
}

export default CustomSelect;