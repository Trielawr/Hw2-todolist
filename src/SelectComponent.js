import React from 'react'
import AddList from "./AddList";
import './SelectComponent.scss';
import './InputComponent.scss'

const SelectComponent = ({ selectOptions, setSelectOptions, items, setItems }) => {

 return (
     <div >
         < div className='select'>
            <p className='select-title'>Фільтр списку завдань</p>
             <select
                 className='select-filter'
                 value={ selectOptions }
                 onChange={ (e) => setSelectOptions(e.target.value) }>
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