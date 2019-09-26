import React,{useState,useEffect} from "react";
import axios from "axios"
// import AxiosAuth from "./AxiosAuth"
import {Form,Field,withFormik} from "formik";
import * as Yup from "yup";
import styled from "styled-components"


const FormDiv = styled.div`
display:flex;
justify-content:center;
margin-top:6%;


`;

const BStyle = styled.button`
border:transparent;
background:#D99C58;
width:10vw;
margin-top:10%;
border:1px solid black;
border-radius:5px;
height:3vh;
font-size:1.8rem;
`;
    const SignupForm = ({history,user,setUser,errors, touched, values, setStatus, status}) => {
    
        return (
            <FormDiv>
                <Form className="form-parent-signup">
                    <div className="field-child">
                    <Field className="no-border" type="text" name="name" placeholder="First Name"/>
                    </div>
                        {touched.name && errors.name && (
                            <span>{errors.name}</span>
                        )}
                        <div className="field-child">
                        <Field className="no-border" type="text" name="username" placeholder="Username"/>
                        </div>
                        {touched.username && errors.username && (
                            <span>{errors.username}</span>
                        )}
                    <div className="field-child">
                    <Field className="no-border" type="text" name="email" placeholder="Email"/>
                    </div>
                        {touched.email && errors.email && (
                                <span>{errors.email}</span>
                        )}
                    <div className="field-child">
                    <Field className="no-border" type="text" name="password" placeholder="Password"/>
                    </div>
                        {touched.password && errors.password && (
                                <span>{errors.password}</span>
                        )}
                    
                    <BStyle onClick={()=>history.push("/")} type="submit">Signup!</BStyle>
                </Form>
            </FormDiv>
        )
    };



    const FormikSignupForm = withFormik({
        mapPropsToValues({name,username,email,password}){
            return{
                name: name || "",
                username: username || "",
                email: email || "",
                password:  password|| ""
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required("You must include a first name"),
            username: Yup.string()
            .required("You must include a username"),
            email: Yup.string()
            .email("Invalid email")
            .required("You must include an email"),
            password: Yup.string()
            .min(3, "Too Short!")
            .max(25, "Too Long!")
            .required("You must include a password")
        }),

        handleSubmit(values, {status, setStatus}){
            console.log("values",values);
            axios
                .post("https://chore-tracker-app.herokuapp.com/api/auth/register", values)
                .then(res =>{
                    setStatus(res.config.data)
                    // console.log("values", values);
                    // console.log("Response", res.config.data);
                    console.log("status", status)
                    console.log("Response", res)
                })
                .catch(err => console.log(err.response));
        }
    })(SignupForm)


    export default FormikSignupForm;