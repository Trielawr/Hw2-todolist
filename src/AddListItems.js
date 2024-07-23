import React from "react";

const AddListItems = (props) => {
    return (
        <>
          <li key={`${props.id}`}>{props.element}       <button type="button" onClick={() => props.onDeleteClick(props.id)}>Delete</button></li>
        </>
    )
};

export default AddListItems;