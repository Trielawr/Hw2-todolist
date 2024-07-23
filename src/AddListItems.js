import React from "react";

const AddListItems = ({ name, id, onDeleteClick }) => {
    return (
        <>
            <li>
                { name }
                <button type="button" onClick={ onDeleteClick(id) }>Delete</button>
            </li>
        </>
    )
};

export default AddListItems;
