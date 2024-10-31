import React from "react";
import './AddListItems.scss';

const AddListItems = ({ id, title, discription , children, checked, onChange }) => {

    return (
        <>
          <div className='item'>
             <li className={ `${(checked === true) ? 'checked ': 'unchecked'}` }  key={ id }>
                <input 
                   className="checkbox"
                   type="checkbox"
                   checked={ checked }
                   onChange ={ onChange }
                />
                { title } - { discription }
                </li>
                <div>
                  { children }
                </div>                
          </div>
        </>
    )
};

export default AddListItems;