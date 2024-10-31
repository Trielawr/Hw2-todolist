import React from 'react';
import { useMemo , useState } from "react";
import AddListItems from "./AddListItems";
import ButtonComponent from "./ButtonComponent";
import ModalContent from "./ModalContent";
import './AddList.scss';
import axios from 'axios';


const AddList = ({ items, setItems, selectOptions }) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalId, setModalId] = useState("");

    const deleteListItems = async (id) => {
        await axios.delete(`http://localhost:3040/todos/${id}`);
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
      <div className={ `${(visibleTodos.length === 0) ? 'list-empty' : 'list-border'}` }>
          <ul className='list-item' > 
                { visibleTodos.map((element) => (
                    <AddListItems 
                        key={ element.id }
                        id={ element.id }
                        discription = { element.discription }
                        title ={ element.title }
                        checked={ element.checked }
                        onChange = { ()=> onChangeCheckbox(element.id) }
                    >
                       { <ButtonComponent
                          aditionalclassName='btn-edit'
                          type='button'
                          text='Edit'
                          onClick={ () => {
                               setModalId(element.id);
                              setModalOpen(true);
                              } }
                         /> }
                       { <ButtonComponent
                           aditionalclassName='btn-del'
                           type='button'
                           text='Delete'
                           onClick={ () => deleteListItems(element.id) }
                          />}
                    </AddListItems>
                  ))
                }
                  {modalId && 
                      <ModalContent
                          id={ modalId }
                          items={ items }
                          setItems={ setItems }
                          isOpen = { isModalOpen }
                          onClose={() => {
                              setModalOpen(false);
                              setModalId('');
                             }
                          }
                       />    
                   }
            </ul>
    </div>
  )
}

export default AddList;