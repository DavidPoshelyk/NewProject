import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"3d4b3ca3-fea7-46c7-8c79-414b84e12e62"
    }
})

export  const  ProfileAPI = {
    profilePage:(userId:number)=> instance.get(`profile/${userId}`),
    getStatus:(userId:string)=> instance.get(`profile/status/${userId}`),
    updateStatus:(status:string)=> instance.put(`profile/status`, {status}),
    postPhoto:(formData:any)=>instance.put('profile/photo', formData)
}