import axios from "axios";


 const AxiosAuth = () =>{
    const token = localStorage.getItem("token");
    return axios.create({
        headers:{
            "Content-Type": "application/json",
            Authorization: token
        }
    })
}

export default AxiosAuth
