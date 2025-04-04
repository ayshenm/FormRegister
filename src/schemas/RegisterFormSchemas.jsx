import * as yup from 'yup';


export const registerFormShemas = yup.object().shape({
    email: yup.string().email("Please enter a valid email address.").required("Email is required."),
    
    age: yup.number().positive("Age must be a positive number.").integer("Age must be an integer.").required("Age is required."), 
    
    password: yup.string().min(8, "Password must be at least 8 characters.").required("Password is required"),
    

    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref('password', yup.password)], ("passwords not matches")),

    term: yup.boolean().required("You must accept the terms and conditions")
})