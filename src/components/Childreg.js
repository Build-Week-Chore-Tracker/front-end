import React , {useState,useEffect} from "react";
import {Form,Field,withFormik} from "formik"
import * as Yup from "yup";
import axios from "axios"



const Childreg = ({history,user,setUser,values, setStatus,status, errors, touched}) =>{
    
    
    return (
        <div>
        <Form>
                <Field type="text" name="name" placeholder="name (required)"/>
                <Field type="text" name="username" placeholder="Username"/>
                <Field type="text" name="password" placeholder="password"/>
                <Field type="text" name="age" placeholder="age (optional)"/>
                
                <button onClick={()=>history.push("/family")} type="submit">Add Child</button>
            </Form>
            </div>
    
    )
};
    const FormikChildreg = withFormik({
    mapPropsToValues({name, username, password,age}){
        return{
            name: name || "",
            username: username || "",
            password: password || "",
            age: age || ""
        }
    },
    validationSchema:Yup.object().shape({
        addfamily: Yup.string()
        .oneOf(["child","parent"])
        .required("Please choose one!")
    }),
    handleSubmit(values,{setStatus}){
        axios
            .post("https://chore-tracker-app.herokuapp.com/api/auth/user/register-child", values)
            .then(res => {
                console.log("childresponse", res)
                setStatus(res)
            })
            .catch(err => console.log(err.response))
    }
})(Childreg)
export default FormikChildreg