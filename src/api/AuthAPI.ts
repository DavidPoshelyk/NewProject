import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"efb35fa1-6088-492e-972d-bc847ab17ea5"

    },

})
export  const  AuthAPI = {
    authData:()=>{return instance.get(`auth/me`).then((response) => response.data)},
    authPost:()=>{return instance.post(` /auth/login`).then((response) => response.data)},

}