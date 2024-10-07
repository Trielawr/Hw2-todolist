import React from "react";
import './ItemsComponents.scss';

const AddListItems = ({ id, element, children, checked, onChange }) => {

    return (
        <>
            <div className='item'>
              <li className={ `${(checked === true) ? 'checked ': 'unchecked'}` }  key={ id }>
                <input 
                   type="checkbox"
                   checked={ checked }
                   onChange ={ onChange }
                />
                { element }
              </li>
              <div>
                { children }
              </div>                
            </div>
         </>
    )
};

export default AddListItems;