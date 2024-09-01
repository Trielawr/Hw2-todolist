import ButtonComponent from "./ButtonComponent";
import {useState } from "react";
import AddListItems from "./AddListItems";
import styles from'./Components.module.css';



const AddList = () => {

    const StartItems = [
    { id: 0, name: "Add to ID list" },
    { id: 1, name: "Create Items" },
    { id: 2, name: "Delete from List" }];
    
    let uuid = crypto.randomUUID();

    const [items, setItems] = useState(StartItems);
    const [input, setInput] = useState('new task');
    const [listState, setListState] = useState('true');
 
    const onClickHandler = () => {
        setItems([...items, { id: uuid, name: input }]);
        setInput('new task');  
        setListState('true');
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    }

    const onEnterHandler = (e) => {
        if (e.key === 'Enter') {
        setItems([...items, {id:uuid,  name: input} ]);
            setInput('new task');  
            setListState('true');
        }
    }

    const deleteListItems = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        // (newItems!==[]) ? setListState('false'):setListState('true') ;
        console.log(items);
        console.log(listState);
    }

  
    return (
        <>
            <h3 className={styles.title}>Created by Functional Component</h3>
            <div className={styles.container}>
                <input
                    onKeyDown={onEnterHandler}
                    onChange={onChangeHandler}
                    value={input}
                />
                <ButtonComponent
                    className='button'
                    type='button'
                    text="Add Todo"
                    onClick={onClickHandler}
                />
                <p>Кількість елементів в списку - {items.length}</p>
                  <ul className={styles.list}>
                  {items.map(element => (
                    <AddListItems key={ element.id } items={ items } id={ element.id } element={ element.name }>
                          {<ButtonComponent
                            className='button'
                              type='button'
                              text='Delete'
                              onClick={() => deleteListItems(element.id)}
                          />}
                    </AddListItems>
                  ))}
                  </ul>
            </div>
        </>
    )
};

export default AddList;