import ButtonComponent from "./ButtonComponent";
import {useState } from "react";
import AddListItems from "./AddListItems";


const AddList = () => {

    const StartItems = [
    { id: 0, name: "Add to ID list" },
    { id: 1, name: "Create Items" },
    { id: 2, name: "Delete from List" }];
    
    let uuid = crypto.randomUUID();

    const [items, setItems] = useState(StartItems);
    const [input, setInput] = useState('new task');
 
    const onClickHandler = () => {
        setItems([...items, { id: uuid, name: input }]);
        setInput('new task');   
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    }

    const onEnterHandler = (e) => {
        if (e.key === 'Enter') {
        setItems([...items, {id:uuid,  name: input} ]);
        setInput('new task');  
        }
    }

    const deleteListItems = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
          console.log("Delete this Item");
    }

  
    return (
        <>
            <input onKeyDown={ onEnterHandler } onChange={ onChangeHandler } value={ input } />
            <p>{ items.length }</p>
            <ul>
                {items.map(element => (
                    <AddListItems key={ element.id } items={ items } id={ element.id } element={ element.name }>
                        {<ButtonComponent type={ "button" }  text={ "Delete" } onClick={ () => deleteListItems(element.id) } />}
                    </AddListItems>
                ))}
            </ul>
            <button type="button" onClick={ onClickHandler }>Add TO DO</button>
        </>
    )
};

export default AddList;