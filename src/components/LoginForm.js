import React from "react";
import axiosWithAuth from "./axiosWithAuth";
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
        font-size:1.8rem;
    `;


    const LoginForm = ({history,errors, touched, values, }) => {

        return (
            <FormDiv>
                <Form className="form-parent-login">
                
                    <div className="field-child">
                    <Field className="no-border" type="text" name="username" placeholder="Username"/>
                    
                    </div> 
                    {touched.username && errors.username && (
                                <span>{errors.username}</span>
                        )}
                    <div className="field-child">
                    <Field  className="no-border" type="text" name="password" placeholder="Password"/>
                        
                    </div>
                    {touched.password && errors.password && (
                                <span>{errors.password}</span>
                        )}
                    <BStyle type="submit">Login!</BStyle>
                </Form>
            </FormDiv>
        )
    };



    const FormikLoginForm = withFormik({
        mapPropsToValues({username,password}){
            return{
                username: username || "",
                password:  password || ""
            }
        },
        validationSchema: Yup.object().shape({
            
            username: Yup.string()
            .required("You must include a username"),
            password: Yup.string()
            .min(3, "Too Short!")
            .max(25, "Too Long!")
            .required("You must include a password")
        }),

        handleSubmit(values,history ){
            return axiosWithAuth()
                .post("/api/auth/login", values)
                .then(res =>{
                    console.log(values);
                    localStorage.setItem("user_id",res.data.user)
                    localStorage.setItem("token",res.data.token )
                    // console.log(res);
                
                    return true;
                })
                .catch(err => console.log("errrorrr",err.response));
        }
    })(LoginForm)


    export default FormikLoginForm;