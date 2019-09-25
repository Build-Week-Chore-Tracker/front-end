import React , {useState,useEffect} from "react";
import {Form,Field,withFormik} from "formik"
import * as Yup from "yup";
import axios from "axios"


 const Childreg = ({props,user,setUser,values, status, errors, touched}) =>{
    console.log(props)
    useEffect(()=>{
        if(status){
            setUser([...user, status] )
            // try values after status
        }
    },[])
    return (
        <div>
        <Form>
                <Field type="text" name="name" placeholder="name (required)"/>
                <Field type="text" name="username" placeholder="Username"/>
                <Field type="text" name="password" placeholder="password"/>
                <Field type="text" name="age" placeholder="age (optional)"/>
                {/* <Field type="checkbox" name="child"/> */}
                <button onClick={()=>props.history.push("/")} type="submit">Add Child</button>
            </Form>
            </div>
            
    )
}
const FormikChildreg = withFormik({
    mapPropsToValues({name, username, password,age,points,child}){
        return{
            name: name || "",
            username: username || "",
            password: password || "",
            age: age || "",
            points: points || "",
            child: child || false
        }
    },
    validationSchema:Yup.object().shape({
        addfamily: Yup.string()
        .oneOf(["child","parent"])
        .required("Please choose one!")
    }),
    handleSubmit(values,{setStatus}){
        axios
            .post("", values)
            .then(res => {
                setStatus(res)
            })
            .catch(err => console.log(err.response))
    }
})(Childreg)
export default FormikChildreg