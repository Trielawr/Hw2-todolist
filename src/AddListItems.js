import React from "react";

const AddListItems = ({ element, id, onDeleteClick }) => {
    return (
        <>
            <li key={`${ props.element }`}>
                { props.element }
                <button type="button" onClick={ onDeleteClick(id) }>Delete</button>
            </li>
        </>
    )
};

export default AddListItems;
