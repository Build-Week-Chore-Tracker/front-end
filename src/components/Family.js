import React, {useState , useEffect} from 'react';
// import axios from "axios";
import {Link} from 'react-router-dom'
import axiosWithAuth from "./axiosWithAuth";

const Family = ({values, status, errors, touched}) =>{
        const [family, setFamily] = useState([])
        useEffect(()=> {
            const userId =localStorage.getItem("user_id")
            axiosWithAuth() 
                .get(`https://chore-tracker-app.herokuapp.com/api/auth/user/${userId}`)
                .then(response => {
                    // console.log("response",response);
                    let family = response.data.family;
                    setFamily(family)
                })
                .catch (err=>{console.log("EERROOR",err)})
            
        },[status]);
        console.log(family);
    return (
        <div> 
            <h1>Family</h1>
            <Link to="/childreg">Add child</Link>
            
            {family.map(users => (
                <div>
                    
                    <p>Welcome! {users.username}</p>
                </div> 
                
            ))}
        </div>
    );
};


export default Family