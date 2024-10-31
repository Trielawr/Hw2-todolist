import React, { useState } from 'react';
import SelectComponent from './SelectComponent';
import InputComponent from './InputComponent';

const UploadComponent = ({ items, setItems}) => {
    
  const [selectOptions, setSelectOptions] = useState("all")
   console.log("Upload Component", items);

  return (
      <div>
          <InputComponent
              items={ items } 
              setItems ={ setItems }
          />
          <h6> Кількість елементів в списку - { items.length }</h6>
          <SelectComponent
              selectOptions = { selectOptions }
              setSelectOptions = { setSelectOptions }
              items = { items }
              setItems ={ setItems }
          />      
    </div>
  )
}

export default UploadComponent;