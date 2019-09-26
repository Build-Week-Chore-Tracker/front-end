import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Form,Field,withFormik} from "formik"
import * as Yup from "yup";

const Family = ({values, status, errors, touched}) =>{
    const [user, setUser] = useState([]);
    console.log("fam",user)
        useEffect(()=> {
            axios   
                .get("https://chore-tracker-app.herokuapp.com/api/auth/user/16")
                .then(response => {
                    console.log("response",response);
                    setUser(response)
                })
            status && setUser(user => [...user, status])
        },[status]);
    return (
        <div> 
            <h1>Family</h1>
            {user.map(family => (
                <div>
                    <p>{family.name}</p>
                </div>
                
            ))}
        </div>
    );
};
//     const FormikFamily = withFormik({
//         mapPropsToValues({name, username, password,age,points,child}){
//             return{
//                 name: name || "",
//                 username: username || "",
//                 password: password || "",
//                 age: age || "",
//                 points: points || "",
//                 child: child || false
//             }
//         },
//         validationSchema:Yup.object().shape({
//             addfamily: Yup.string()
//             .oneOf(["child","parent"])
//             .required("Please choose one!")
//         }),
//         handleSubmit(values,{setStatus}){
//             axios
//                 .post("", values)
//                 .then(res => {
//                     setStatus(res)
//                 })
//                 .catch(err => console.log(err.response))
//         }
// })(Family)


export default Family