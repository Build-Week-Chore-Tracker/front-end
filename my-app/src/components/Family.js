import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Form,Field,withFormik} from "formik"
import * as Yup from "yup";

const Family = ({values, status}) =>{
    const [families, setFamilies] = useState("");
        useEffect(()=> {
            status && setFamilies(families => [...families, status])
        },[status]);
    return (
        <div> 
            <h1>Family</h1>
            <Form>
                <Field type="text" name="family" placeholder="Add new family"/>
                <button type="submit">Add Family</button>
            </Form>
            {/* {families.map(family => (
                <p>{family}</p>
            ))} */}
        </div>
    );
};
    const FormikFamily = withFormik({
        mapPropsToValues({family}){
            return{
                family: family || ""
            }
        },

        handleSubmit(values,{setStatus}){
            axios
                .post("", values)
                .then(res => {
                    setStatus(res.data)
                })
                .catch(err => console.log(err.response))
        }
})(Family)


export default FormikFamily