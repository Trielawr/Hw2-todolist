import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react'

const FormikComponent = () => {

    const onSubmit = (values) => {
        console.log(values);
    }
 
    const validateForm = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Введіть своє імя";
        }

        if (!values.email) {
            errors.email = "Введіть свою електронну пошту";
        }
        return errors;
    };


    return (
        <div>
            <h1>Форма з використанням Formik</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                }}
                validate={validateForm}
                onSubmit={onSubmit}

            >
                <form>
                    <div>
                        <label htmlFor='name'>Імя</label>
                        <Field type="text" id="name" name="name"></Field>
                        <ErrorMessage name="name" component='div' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <Field type="email" id="email" name="email"></Field>
                        <ErrorMessage name="email" component='div' />
                    </div>
                    <button type='submit'>Відправити</button>
                </form>
            </Formik>
        </div>
    );
}

export default FormikComponent;