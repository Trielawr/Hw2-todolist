import React from "react";

const AddListItems = (props) => {
    return (
        <>
            <li key={ props.id }>{ props.element }</li>
            { props.children }
         </>
    )
};

export default AddListItems;