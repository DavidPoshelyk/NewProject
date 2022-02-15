import axios from "axios";
import {isSubscribers} from "../Redux/Users-reducer";



const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"3d4b3ca3-fea7-46c7-8c79-414b84e12e62"
    }
})
export  const  UserAPI = {
    MoreUsers:(page:number,friend:boolean)=>{return instance.get(`users?page=${page}&count=10&friend=${friend}`).then((response) => response.data)},
    GetUsers:()=>{return instance.get('users?page=1').then((response) =>  response.data)},
    GetSubscribers:()=>{return instance.get('users?page=1&friend=true')},
    UnfollowUsers:(id:string)=>{return instance.delete(`follow/${id}`)},
    FollowUsers:(id:string)=>{return instance.post(`follow/${id}`)},


}