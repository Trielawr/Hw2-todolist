import React from 'react'
import AddList from "./AddList";
import './ItemsComponents.scss';

const SelectComponent = ({ selectOptions, setSelectOptions, items, setItems }) => {

    const onChangeSelectOptions = (e) => {
        setSelectOptions(e.target.value);
    }

 return (
     <div >
         < div className='select'>
            <select value={ selectOptions } onChange={ onChangeSelectOptions } >
                    <option value='all' >Всі</option>
                    <option value='ended'>Завершені</option>
                    <option value='active'>Активні</option>
            </select>             
         </div>
        <AddList
             items={ items }
             setItems={ setItems }
             selectOptions={ selectOptions }
        />               
     </div>
  )
}

export default SelectComponent;