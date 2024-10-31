import React from 'react';
import { useFormik } from "formik"; 
import { useState } from 'react';
import axios from 'axios';
import ButtonComponent from './ButtonComponent';
import validationSchema from './utilits'
import './InputComponent.scss'


const InputComponent = ({ items, setItems }) => {

    const [uuid, setUuid] = useState(items.length);
    console.log("Input Component", items);

    const postDate = async () => {
        const payload = {
            title: formik.values.title ,
            discription: formik.values.discription ,
            checked: formik.values.checked,
            creationDate: new Date().toISOString() 
        };
        const responce = await axios.post('http://localhost:3040/todos', payload);
        setItems(prev=>[...prev, responce.data])
    }

const formik = useFormik({
        initialValues: {
            title: "",
            discription: "",
            checked: false
        },
        validationSchema: validationSchema,
    onSubmit: () => {
        postDate();
        setUuid(uuid + 1);
        formik.resetForm();
        },
    onEnterHandler: () => {
        postDate();
        setUuid(uuid+1);
        formik.resetForm();
        }
    }     
    )

  return (
      <div>
          <h6 className='form-info'>Вікно створення списку завдань</h6>
          <form  onSubmit={ formik.handleSubmit }>
              <div className='form'>
                 <div className='form-container'>
                   <div className='form-elements'> 
                      <h6 className='form-title'>Додати назву завдання</h6>
                         <input style={{height: "25px", width: "100%"}}
                            onKeyDown={ formik.onEnterHandler }
                            onChange={formik.handleChange}
                            onBlur={ formik.handleBlur}
                            name= "title"
                            value={ formik.values.title }
                            type="text"
                            placeholder="new task"
                         />
                    </div >
                    { (formik.errors.title && formik.touched.title) ? <p className='errors'>{ formik.errors.title } </p>: null } 
                  </div>
                  <div className='form-container'>                   
                     <div className='form-elements'>
                       <h6 className='form-title'>Додати опис завдання</h6>
                        <input style={{height: "25px", width: "100%"}}
                              onKeyDown={ formik.onEnterHandler }
                              onChange={formik.handleChange}
                              onBlur={ formik.handleBlur}
                              name= "discription"
                              value={ formik.values.discription }
                              type="text"
                              placeholder="new task"
                        />
                     </div>
                     { (formik.errors.discription && formik.touched.discription) ? <p className='errors'>{ formik.errors.discription } </p> :null }  
                  </div>
                <div className='form-container'>
                   <div className='form-elements'> 
                      <h6 className='form-title' style={{width: "48%"}}>Статус виконання</h6>
                         <input className='form-checkbox' 
                            onKeyDown={ formik.onEnterHandler }
                            onChange={formik.handleChange}
                            onBlur={ formik.handleBlur}
                            name= "checked"
                            type="checkbox"
                            checked={ formik.values.checked }
                         />
                    </div > 
                  </div>
                <ButtonComponent
                    aditionalclassName='btn_itemAdded'
                    disabled = { formik.errors.discription || formik.errors.title }
                    type='submit'
                    text="Add Todo"
                />           
             </div>
          </form>
      </div>
  )
}

export default InputComponent;