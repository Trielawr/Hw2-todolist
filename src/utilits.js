import * as Yup from "yup";


 const validationSchema =  Yup.object({
        discription: Yup.string()
            .required("Введіть значення")
            .max(20, "Має бути менше 20 символів")
            .min(3, "Має бути більше 3 символів"),
        title: Yup.string()
            .required("Введіть значення")
            .max(10, "Має бути менше 10 символів")
            .min(3, "Має бути більше 3 символів"),
    });


export default validationSchema;