import React from "react";
import axios from "axios"
import {Form,Field,withFormik} from "formik";
import * as Yup from "yup";


    const SignupForm = ({errors, touched, values, status}) => {

        return (
            <div>
                <Form>
                    <Field type="text" name="name" placeholder="Your Name"/>
                        {touched.name && errors.name && (
                            <p>{errors.name}</p>
                        )}
                        <Field type="text" name="lastName" placeholder="Last Name"/>
                        {touched.lastName && errors.lastName && (
                            <p>{errors.lastName}</p>
                        )}
                    
                    <Field type="text" name="email" placeholder="Your Email"/>
                        {touched.email && errors.email && (
                                <p>{errors.email}</p>
                        )}
                    
                    <Field type="text" name="pass" placeholder="Your Password"/>
                        {touched.pass && errors.pass && (
                                <p>{errors.pass}</p>
                        )}
                    
                    <button type="submit">Signup!</button>
                </Form>
            </div>
        )
    };



    const FormikSignupForm = withFormik({
        mapPropsToValues({name,lastName,email,pass}){
            return{
                name: name || "",
                lastName: lastName || "",
                email: email || "",
                pass:  pass|| ""
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required("You must include a first name"),
            lastName: Yup.string()
            .required("You must include a last name"),
            email: Yup.string()
            .email("Invalid email")
            .required("You must include an email"),
            pass: Yup.string()
            .min(3, "Too Short!")
            .max(25, "Too Long!")
            .required("You must include a password")
        }),

        handleSubmit(values, {setStatus}){
            axios
                .post("", values)
                .then(res =>{
                    // setStatus(res.data)
                    console.log(res);
                })
                .catch(err => console.log(err.response));
        }
    })(SignupForm)


    export default FormikSignupForm;