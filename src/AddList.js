import React from 'react';
import {useMemo } from "react";
import AddListItems from "./AddListItems";
import ButtonComponent from "./ButtonComponent";
import './ItemsComponents.scss';


const AddList = ({ items, setItems, selectOptions }) => {

    const deleteListItems = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    };

    const visibleTodos = useMemo(
        () => filterItems(items, selectOptions),
        [items, selectOptions]
    );
    

    function filterItems(){
        if (selectOptions === 'ended') {
            return items.filter((item) => (item.checked === true));
        } else if (selectOptions === 'active') {
            return items.filter((item) => (item.checked === false));
        } else if (selectOptions === 'all') {
            return items.filter((item) => item);
        }
    };     

    const onChangeCheckbox = (id) => {
        setItems((items) => items.map(
            item => (item.id === id) ? { ...item, checked: !item.checked } : item
        ));
    };

  return (
      <div className={ `${(visibleTodos.length === 0) ? 'list-empty' : 'list-border' }` }>
          <ul className='list-item' > 
                  { visibleTodos.map((element) => (
                      <AddListItems 
                          key={ element.id }
                          id={ element.id }
                          element={ element.name }
                          checked={ element.checked }
                          onChange = { ()=> onChangeCheckbox(element.id) }
                      >
                      { <ButtonComponent
                           aditionalclassName='btn-del'
                           type='button'
                           text='Delete'
                           onClick={() => deleteListItems(element.id)}
                          /> }
                    </AddListItems>
                  )) }
                </ul>
    </div>
  )
}

export default AddList;