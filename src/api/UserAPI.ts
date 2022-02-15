import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"efb35fa1-6088-492e-972d-bc847ab17ea5"
    }
})
export  const  UserAPI = {
    MoreUsers:(page:number)=>{return instance.get(`users?page=${page}&count=10`).then((response) => response.data)},
    GetUsers:()=>{return instance.get('users?page=1').then((response) =>  response.data)},
    UnfollowUsers:(id:string)=>{return instance.delete(`follow/${id}`).then(response=> response.data.resultCode )},
    FollowUsers:(id:string)=>{return instance.post(`follow/${id}`).then(response=> response.data.resultCode )},

}