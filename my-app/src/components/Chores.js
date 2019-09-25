import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Form,Field,withFormik} from "formik"
import * as Yup from "yup";


const Chores = ({values, status}) =>{
    const [chores, setChores] = useState("");
        useEffect(()=> {
            axios   
                .get("https://chore-tracker-app.herokuapp.com/api/auth/user/1/chores")
                .then(response => {
                    console.log(response);
                    setChores(response)
                })
            status && setChores(chores => [...chores, status])
        },[status]);
    return (
        <div> 
            <h1>Chores</h1>
            <Form>
                <Field type="text" name="chores" placeholder="Add new chore"/>
                <button type="submit">Add Chore</button>
            </Form>
            {/* {chores.map(chore => (
                <p>{chore}</p>
            ))} */}
        </div>
    );
};
    const FormikChores = withFormik({
        mapPropsToValues({chores}){
            return{
                chores: chores || ""
            }
        },

        handleSubmit(values,{setStatus}){
            axios
                .post("https://chore-tracker-app.herokuapp.com/api/auth/user/chores/:id", values)
                .then(res => {
                    setStatus(res.data)
                })
                .catch(err => console.log(err.response))
        }
})(Chores)


export default FormikChores