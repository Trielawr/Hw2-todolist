import ButtonComponent from "./ButtonComponent";
import {useState } from "react";
import './FunctionalComponent.scss'
import SelectComponent from "./SelectComponent";
import { useFormik } from "formik"; 
import * as Yup from "yup";


const FunctionalComponent = () => {

    const StartItems = [
    { id: 0, name: "Add to ID list", checked: false},
    { id: 1, name: "Create Items", checked: true},
    { id: 2, name: "Delete from List", checked: false}];
    
    let uuid = crypto.randomUUID();
   
    const [items, setItems] = useState(StartItems);
    const [selectOptions, setSelectOptions] = useState('all');
  
    const formik = useFormik({
        initialValues: {
            input: ""
        },
        validationSchema: Yup.object({
            input: Yup.string()
                .required("Введіть значення")
                .max(20, "Має бути менше 20 символів")
                .min(3, "Має бути більше 3 символів"),
        }),
        onSubmit: () => {
            setItems([...items, { id: uuid, name: formik.values.input, checked: false }]);
            formik.resetForm();
        },
        onEnterHandler: () => {
        setItems([...items, {id:uuid,  name: formik.values.input, checked: false} ]);
        }
    }     
    )

    return (
        <>
            <h3 className='title'>Created by Functional Component</h3>
            <div className='container' >
                <form  onSubmit={ formik.handleSubmit }>
                    <div className='form'>
                    <h6>Список справ</h6>
                    <input
                        onKeyDown={ formik.onEnterHandler }
                        onChange={ formik.handleChange }
                        name= "input"
                        value={ formik.values.input }
                        type="text"
                        placeholder="new task"
                    />
                    <ButtonComponent
                        aditionalclassName='btn_itemAdded'
                        disabled = { formik.errors.input }
                        type='submit'
                        text="Add Todo"
                    />           
                    </div>
                    { formik.errors.input && <p className='errors'>{ formik.errors.input } </p> }
                </form>
                <h6>Кількість елементів в списку - { items.length }</h6>
                <SelectComponent
                    selectOptions={ selectOptions }
                    setSelectOptions={ setSelectOptions}
                    items={ items }
                    setItems = { setItems }
                />                    
           </div>
        </>
    )
};

export default FunctionalComponent;