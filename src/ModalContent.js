import React, { useEffect, useState } from 'react'
import './ModalContent.scss'
import ButtonComponent from './ButtonComponent';
import { useFormik } from "formik"; 
import './ButtonComponent.scss'
import axios from 'axios';
import validationSchema from './utilits'

function ModalContent({ isOpen, onClose, items, setItems, id }) {

 const [modalItem, setModalItem] = useState("");

  useEffect(() => {
    const uploadEditData = async () => {
      try {
        const responce = await axios.get(`http://localhost:3040/todos/${id}`);
        setModalItem(responce.data);
      } catch (error) {
        throw new Error("Проблеми при загрузці");
      }
    };

    uploadEditData();

  },[modalItem])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: modalItem.title,
      discription: modalItem.discription,
      checked: modalItem.checked
        },
        validationSchema: validationSchema,
        onSubmit: () => {
          UpdateData(id);
          formik.resetForm();
        },
        onEnterHandler: () => {
          UpdateData(id);
          formik.resetForm();
        }
      }     
  )
  
  const UpdateData = async (id) => {
    const payload = {
      title: formik.values.title,
      discription: formik.values.discription,
      checked: formik.values.checked,
      creationDate: new Date().toISOString()
    };
    const responce = await axios.put(`http://localhost:3040/todos/${id}`, payload);
    setModalItem(responce.data);
    setItems(items.map((item) => (item.id === id) ? responce.data : item
    ));
  }
    
     return (
     <>
        { isOpen ? (
           <div className="modal">         
            <div className="modal-content">
                <ButtonComponent
                    text="X"
                    aditionalclassName='modal_btn_close'
                    onClick={onClose}
                />
               <div>
                 <h6 className='form-info'>Вікно редагування списку завдань</h6>
                <form  onSubmit={ formik.handleSubmit }>
                   <div className='form'>
                      <div className='form-container'>
                         <div className='form-elements'> 
                         <h6 className='form-title'>Змінити назву завдання</h6>
                         <input style={{height: "25px", width: "100%"}}
                            onKeyDown={ formik.onEnterHandler }
                            onChange={formik.handleChange}
                            onBlur={ formik.handleBlur}
                            name="title"
                            value={ formik.values.title }
                            type="text"
                            placeholder="new task"
                          />
                          </div >
                          { (formik.errors.title && formik.touched.title) ? <p className='errors modalError'>{ formik.errors.title } </p>: null } 
                       </div>
                       <div className='form-container'>                   
                          <div className='form-elements'>
                          <h6 className='form-title'>Змінити опис завдання</h6>
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
                          { (formik.errors.discription && formik.touched.discription) ? <p className='errors modalError'>{ formik.errors.discription } </p> :null }  
                       </div>
                       <div className='form-container'>
                          <div className='form-elements'> 
                          <h6 className='form-title' style={{width: "47%"}} >Статус виконання</h6>
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
                      text="Save"
                    />           
                  </div>
               </form>
             </div>
           </div>
        </div>
        ) : null    
      }
   </>
  )
}

export default ModalContent;