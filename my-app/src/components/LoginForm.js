import React from "react";
import axios from "axios"
import {Form,Field,withFormik} from "formik";
import * as Yup from "yup";
import styled from "styled-components";

    const FormDiv = styled.div`
        display:flex;
        justify-content:center;
        margin-top:10%;
        
        width:100vw;
    `;

    const BStyle = styled.button`
        border:transparent;
        background:yellow;
        width:10vw;
        margin-top:10%;
        border:1px solid black;
        border-radius:5px;
        height:3vh;
        
    `;


    const LoginForm = ({errors, touched, values, status}) => {

        return (
            <FormDiv>
                <Form className="form-parent-login">
                
                    <div className="field-child">
                    <Field className="no-border" type="text" name="email" placeholder="Email"/>
                    
                    </div> 
                    {touched.email && errors.email && (
                                <span>{errors.email}</span>
                        )}
                    <div className="field-child">
                    <Field  className="no-border" type="text" name="pass" placeholder="Password"/>
                        
                    </div>
                    {touched.pass && errors.pass && (
                                <span>{errors.pass}</span>
                        )}
                    <BStyle type="submit">Login!</BStyle>
                </Form>
            </FormDiv>
        )
    };



    const FormikLoginForm = withFormik({
        mapPropsToValues({email,pass}){
            return{
                email: email || "",
                pass:  pass || ""
            }
        },
        validationSchema: Yup.object().shape({
            
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
    })(LoginForm)


    export default FormikLoginForm;