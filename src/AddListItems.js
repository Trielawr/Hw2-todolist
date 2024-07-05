import React from "react";

const AddListItems = (props) => {
    return (
        <>
            <li key={`${ props.element }`}>{ props.element }</li>
        </>
    )
};

export default AddListItems;