import { useState } from "react";
import AddListItems from "./AddListItems";

const AddList = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('new task');

    const onClickHandler = () => {
        setItems([...items, input]);
        setInput('new task');
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    }

    const deleteListItem = id => {
        // some logic for deletion goes here
    }

    return (
        <>
            <input onChange={ onChangeHandler } value={input} />
            <p>{ items.length }</p>
            <ul>
                { items.map(element => <AddListItems items={ items } element={ element } onDeleteClick={ deleteListItem } />) }
            </ul>
            <button onClick={ onClickHandler }>Add TO DO</button>
        </>
    )
};

export default AddList;
